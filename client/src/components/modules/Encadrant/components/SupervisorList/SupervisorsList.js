import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Container from "../../../../basicComponents/Container";
import {loadSupervisors} from "../../../../../actions/supervisor/supervisorsAction";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {connect} from "react-redux";
import {loadDeleteSupervisor} from '../../../../../actions/supervisor/deleteSupervisorAction';
import {useTranslation} from "react-i18next";

const SupervisorsList = (props) => {
    const {t} = useTranslation();

    const {loadSupervisors,loadSupervisorsList, supervisors, loadDeleteSupervisor} = props;

    const  confirm = (id) => {
        confirmAlert({
            title: t('confirmSuppression'),
            message: t('msgDeleteSupervisor'),
            buttons: [
                {
                    label: t('yes'), onClick: () => { loadDeleteSupervisor(id,() => props.history.push('/encadrants')) }
                },
                {
                    label: t('no'), onClick: () => alert('Click Non')
                }
            ]
        });
    };

    useEffect(() => {
        loadSupervisors();
        return () => { };
    }, [loadSupervisors]);

    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
            <Legend>{t('supervisorsList')}</Legend>
                {loadSupervisorsList ? <Loader/> :
                    <Table responsive borderless className="mt-5 pb-5">
                        <thead>
                        <tr>
                            <th>{t('firstName')}</th>
                            <th>{t('lastName')}</th>
                            <th>{t('phone')}</th>
                            <th>{t('email')}</th>
                            <th>{t('action')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            typeof supervisors  !== "string" ?
                            supervisors.map(supervisor => (
                                <tr key={supervisor._id}>
                                    <td>{supervisor.firstname}</td>
                                    <td>{supervisor.lastname}</td>
                                    <td>{supervisor.phone}</td>
                                    <td>{supervisor.email}</td>
                                    <td>
                                         <NavLink title={t('updateSupervisorInfos')} to={`/encadrants/modifier/${supervisor._id}`}><i
                                                className="mr-4 far fa-edit text-secondary"/>
                                         </NavLink>
                                         <i title={t('deleteSupervisor')} onClick={() => confirm(supervisor._id)} className="far fa-trash-alt text-secondary"/>
                                    </td>
                                </tr>
                            )) : null
                        }
                        </tbody>
                  </Table>
                }
                { typeof supervisors  === "string" ? <span className='nv-empty-msg'>{ supervisors.split(":").pop() }</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadSupervisorsList, supervisors}) =>  {
    return ({
        loadSupervisorsList,
        supervisors,
    });
};

export default connect( mapStateToProps,{loadSupervisors,loadDeleteSupervisor})(SupervisorsList);
