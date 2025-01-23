import React, {  useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Container from "../../../../basicComponents/Container";
import {connect} from "react-redux";
import {confirmAlert} from "react-confirm-alert";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {loadDemandsRefused} from "../../../../../actions/demand/demandsrefusedAction";
import {loadDeleteInternship} from "../../../../../actions/internship/deleteInternshipAction";
import {useTranslation} from "react-i18next";


const AcceptedList= ({...props}) => {
    const {loadDemandsRefused,loadRefusedList, refusedList, loadDeleteInternship } = props;
    const {t} = useTranslation();

    const  confirm = (id) => {
        confirmAlert({
            title: t('confirmSuppression'),
            message:t('msgDeleteDemand'),
            buttons: [
                {
                    label: t('yes'),
                    onClick:   () => { loadDeleteInternship(id); }
                },
                {
                    label: t('no'),
                    onClick: () => false
                }
            ]
        });
    };

    useEffect(() => {
        loadDemandsRefused();
        return () => {
        };
    }, [loadDemandsRefused]);

    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
                <Legend>{t('listOfRefusedDemand')}</Legend>
                {  loadRefusedList ? <Loader/> :
                    <Table responsive borderless className="mt-5 pb-5">
                        <thead>
                        <tr>
                            <th>{t('fullName')}</th>
                            <th>{(t('agency'))}</th>
                            <th>{(t('typeOfInternship'))}</th>
                            <th>{t('comment')}</th>
                            <th>{t('action')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            typeof refusedList  !== "string" ?
                            refusedList.map(data => (
                                <tr key={data.refused._id}>
                                    <td>{`${data.nom} ${data.prenom}`} </td>
                                    <td>{data.refused.agence}</td>
                                    <td>{data.refused.type_de_stage}</td>
                                    <td>{data.refused.commentaire}</td>
                                    <td>
                                        <NavLink title={t('updateComment')}  to={`/stages/refused/${data.refused._id}`}><i
                                            className=" mr-4 far fa-edit text-secondary"/></NavLink>
                                         <i title={t('deleteDemand')}   onClick={() => confirm(data.refused._id)}
                                            className="far fa-trash-alt text-secondary"/>
                                    </td>
                                </tr>
                            )): null
                        }
                        </tbody>
                    </Table>
               }
                { typeof refusedList  === "string" ? <span className='nv-empty-msg'>{ refusedList.split(":").pop() }</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadRefusedList, refusedList}) =>  {
    return ({
        loadRefusedList,
        refusedList
    });
};


export default connect(mapStateToProps, {loadDemandsRefused,loadDeleteInternship})(AcceptedList);

