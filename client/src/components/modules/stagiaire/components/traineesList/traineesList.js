import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Container from "../../../../basicComponents/Container";
import 'react-confirm-alert/src/react-confirm-alert.css';
import {loadTrainees} from "../../../../../actions/trainee/traineesAction";
import {connect} from "react-redux";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {useTranslation} from "react-i18next";



const TraineesList = ({...props}) => {
    const {t} = useTranslation();

    const {loadTrainees, trainees,loadTraineesList} = props;
    useEffect(() => {
        loadTrainees();
        return () => {
        };
    }, [loadTrainees]);

    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
                <Legend>{t('traineesList')}</Legend>
                { loadTraineesList ? <Loader/> :
                <Table responsive borderless className="mt-5 pb-5">
                    <thead>
                    <tr>
                        <th>{t('civility')}</th>
                        <th>{t('cin')}</th>
                        <th>{t('firstName')}</th>
                        <th>{t('lastName')}</th>
                        <th>{t('phone')}</th>
                        <th>{t('email')}</th>
                        <th>{t('address')}</th>
                        <th>{t('civilStatus')}</th>
                        <th>{t('formation')}</th>
                        <th>{t('action')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        typeof trainees  !== "string" ?
                        trainees.map(trainee => (
                            <tr key={trainee._id}>
                                <td>{trainee.civilite}</td>
                                <td>{trainee.cin}</td>
                                <td>{trainee.nom}</td>
                                <td>{trainee.prenom}</td>
                                <td>{trainee.tel}</td>
                                <td>{trainee.email}</td>
                                <td>{trainee.adresse}</td>
                                <td>{trainee.etat_civil}</td>
                                <td>{trainee.formation}</td>
                                <td>
                                    <NavLink title={t('details')} to={`/stagiaires/details/${trainee._id}`}>
                                        <i className="mr-4 far fa-eye text-secondary"/>
                                    </NavLink>
                                    <NavLink title={t('updateTrainee')} to={`/stagiaires/edit/${trainee._id}`}><i
                                            className=" far fa-edit text-secondary"/>
                                    </NavLink>

                                </td>
                            </tr>
                        )) : null
                    }
                    </tbody>
                </Table>
                }
             { typeof trainees  === "string" ? <span className='nv-empty-msg'>{ trainees.split(":").pop() }</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadTraineesList, trainees}) => {
    return ({ loadTraineesList, trainees  });
};
const mapDispatchToProps = dispatch => ({
    loadTrainees: () => dispatch(loadTrainees())
});
export default connect(mapStateToProps, mapDispatchToProps)(TraineesList);



