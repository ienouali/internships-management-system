import React, {useEffect} from 'react';
import {connect} from "react-redux";
import moment from 'moment';
import {NavLink} from 'react-router-dom'
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import {loadDemands} from "../../../../../actions/demand/demandsAction";
import Container from "../../../../basicComponents/Container";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {loadDeleteInternship} from '../../../../../actions/internship/deleteInternshipAction';
import {loadCV} from '../../../../../actions/trainee/getCVAction';
import {saveAs} from 'file-saver';
import {useTranslation} from "react-i18next";

const DemandsList = ({...props}) => {
    const {loadDemands, demands, isLoading, loadDeleteInternship} = props;
    const {t} = useTranslation();

    const confirm = (id) => {
        confirmAlert({
            title: t('confirmSuppression'),
            message: t('msgDeleteDemand'),
            buttons: [
                {
                    label: t('yes'),
                    onClick: () => {
                        loadDeleteInternship(id);
                    }
                },
                {
                    label: t('no'),
                    onClick: () => null
                }
            ]
        });
    };

    useEffect(() => {
        loadDemands();
        return () => {
        };
    }, [loadDemands]);


    const download = (id) => {
       props.loadCV(id);
       if(props.CV) {
           const type = props.CV.type.includes('.document') ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
               : 'application/pdf';
           const extension = type.includes('.document') ? 'docx' : 'pdf';
           const fileBlob = new Blob([props.CV], {type: type});
           saveAs(fileBlob, `fileCV.${extension}`);
           props.CV = null;
       }
    };

    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
                <Legend>{t('demandsList')}</Legend>
                {isLoading ? <Loader/> :
                    <Table responsive borderless className="mt-5 pb-5">
                        <thead>
                        <tr>
                            <th>{t('fullName')}</th>
                            <th>{t('agency')}</th>
                            <th>{t('startDate')}</th>
                            <th>{t('duration')}</th>
                            <th>{t('department')}</th>
                            <th>{t('typeOfInternship')}</th>
                            <th>{t('cv')}</th>
                            <th>{t('decision')}</th>
                            <th>{t('action')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           typeof demands  !== "string" ?
                            demands.map(data => (
                                <tr key={data.demand._id}>
                                    <td>{`${data.nom} ${data.prenom}`}</td>
                                    <td>{data.demand.agence}</td>
                                    <td>{data.demand.date_debut_stage.split('T')[0].split('-').reverse().join('-')}</td>
                                    <td>
                                        {moment(data.demand.date_fin_stage).diff(data.demand.date_debut_stage, 'month') === 0 ?
                                            moment(data.demand.date_fin_stage).diff(data.demand.date_debut_stage, 'week') + t('week') :
                                            moment(data.demand.date_fin_stage).diff(data.demand.date_debut_stage, 'month') + t('month')}
                                    </td>
                                    <td>{data.demand.departement}</td>
                                    <td>{data.demand.type_de_stage}</td>
                                    <td><i onClick={() => download({
                                        nom: data.nom,
                                        prenom: data.prenom,
                                        date: data.date_naissance
                                    })}
                                           className="fa-lg text-secondary far fa-file-alt"/>
                                    </td>
                                    <td>
                                        <NavLink title={t('btnAcceptDemand')} className=' mr-3 text-secondary'
                                                 to={`/stages/accepter/${data.demand._id}`}> <i
                                            className="nv-solid-blue fas fa-check-circle"/>&nbsp;</NavLink>
                                        &nbsp;&nbsp;
                                        <NavLink title={t('btnRefuseDemand')} className='text-secondary'
                                                 to={`/stages/refused/${data.demand._id}`}>
                                            <i className="text-danger fas fa-exclamation-circle"/>&nbsp;  </NavLink>
                                    </td>
                                    <td>
                                        <NavLink title={t('updateDemand')} className='mr-4'
                                                 to={`/demandes/edit/${data.demand._id}`}><i
                                            className="far fa-edit text-secondary"/></NavLink>

                                            <i title={t('deleteDemand')} onClick={() => confirm(data.demand._id)}
                                               className="far fa-trash-alt text-secondary"/>
                                    </td>
                                </tr>
                            )) : null
                        }
                        </tbody>
                    </Table>
                }
                { typeof demands  === "string" ? <span className='nv-empty-msg'>{ demands.split(":").pop() }</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({isLoading, demands, loadCV, CV}) => {
    return ({
        isLoading,
        demands,
        loadCV,
        CV
    });
};

export default connect(mapStateToProps, {loadDemands, loadDeleteInternship, loadCV})(DemandsList);
