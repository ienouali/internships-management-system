import React, { useEffect } from 'react';
import moment from 'moment'; 
import { NavLink } from 'react-router-dom'
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Container from "../../../../basicComponents/Container";
import {loadInternshipsAccepted} from "../../../../../actions/internship/internshipsAcceptedAction";
import {connect} from "react-redux";
import {confirmAlert} from "react-confirm-alert";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {loadDeleteInternship} from "../../../../../actions/internship/deleteInternshipAction";
import {useTranslation} from "react-i18next";


const AcceptedList= ({...props}) => {
    const {loadInternshipsAccepted,loadAcceptedList, acceptedList,loadDeleteInternship } = props;
    const {t} = useTranslation();

    const  confirm = (id) => {

        confirmAlert({
        title: t('confirmSuppression'),
        message: t('msgDeleteInternship'),
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
        loadInternshipsAccepted();
        return () => {
        };
    }, [loadInternshipsAccepted]);

    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
                <Legend>{t('listOfInternshipInProgress')}</Legend>
                { loadAcceptedList ? <Loader/> :
                    <Table responsive borderless className="mt-5 pb-5">
                        <thead>
                        <tr>
                            <th>{t('fullName')}</th>
                            <th>{t('agency')}</th>
                            <th>{t('department')}</th>
                            <th>{t('startDate')}</th>
                            <th>{t('endDate')}</th>
                            <th>{t('duration')}</th>
                            <th>{t('typeOfInternship')}</th>
                            <th>{t('action')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            typeof acceptedList  !== "string" ?
                            acceptedList.map(data => (
                                <tr key={data.internship._id}>
                                    <td>{`${data.nom} ${data.prenom}`}</td>
                                    <td>{data.internship.agence}</td>
                                    <td>{data.internship.departement}</td>
                                    <td>{data.internship.date_debut_stage.split('T')[0].split('-').reverse().join('-')}</td>
                                    <td>{data.internship.date_fin_stage.split('T')[0].split('-').reverse().join('-')}</td>
                                    <td>
                                        {moment(data.internship.date_fin_stage).diff(data.internship.date_debut_stage, 'month') === 0 ?
                                            moment(data.internship.date_fin_stage).diff(data.internship.date_debut_stage, 'week') +' '+ t('week') :
                                            moment(data.internship.date_fin_stage).diff(data.internship.date_debut_stage, 'month') +' '+ t('month')}
                                    </td>
                                    <td>{data.internship.type_de_stage}</td>
                                    <td>
                                        <NavLink title={t('details')} to={`/stages/details/${data.internship._id}`}>
                                            <i className="mr-4 far fa-eye text-secondary"/></NavLink>
                                        <NavLink title={t('updateInternship')}  to={`/stages/modifier/${data.internship._id}`}>
                                            <i className="mr-4 far fa-edit text-secondary"/></NavLink>
                                            <i  onClick={() => confirm(data.internship._id)} title={t('deleteInternship')}
                                                className="mr-4 far fa-trash-alt text-secondary"/>
                                    </td>
                                </tr>
                            )): null
                        }
                        </tbody>
                    </Table>
                }
                { typeof acceptedList  === "string" ? <span className='nv-empty-msg'>{ acceptedList.split(":").pop() }</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadAcceptedList, acceptedList}) =>  {
    return ({
        loadAcceptedList,
        acceptedList
    });
};


export default connect(mapStateToProps, {loadInternshipsAccepted,loadDeleteInternship})(AcceptedList);

