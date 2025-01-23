import React, {useEffect} from 'react';
import moment from 'moment';
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Container from "../../../../basicComponents/Container";
import {loadInternshipsClosed} from "../../../../../actions/internship/internshipsClosedAction";
import {connect} from "react-redux";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {loadDeleteInternship} from "../../../../../actions/internship/deleteInternshipAction";
import {loadAttestation} from '../../../../../actions/internship/getAttestationAction';
import {useTranslation} from "react-i18next";

const ClosedList = ({...props}) => {
    const {t} = useTranslation();
    const {loadInternshipsClosed, loadClosedList, closedList} = props;
    useEffect(() => {
        loadInternshipsClosed();
        return () => {
        };
    }, [loadInternshipsClosed]);

    const download = (data) => {
        props.loadAttestation(data);

    };

    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
                <Legend>{t('listOfClosedInternship')}</Legend>
                {loadClosedList ? <Loader/> :
                    <Table responsive borderless className="mt-5 pb-5">
                        <thead>
                        <tr>
                            <th>{t('fullName')}</th>
                            <th>{t('agency')}</th>
                            <th>{t('startDate')}</th>
                            <th>{t('endDate')}</th>
                            <th>{t('typeOfInternship')}</th>
                            <th className='text-center'>{t('certificate')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            typeof closedList !== "string" ?
                                closedList.map(data => (
                                    <tr key={data.closed._id}>
                                        <td>{`${data.nom} ${data.prenom}`}</td>
                                        <td>{data.closed.agence}</td>
                                        <td>{data.closed.date_debut_stage.split('T')[0].split('-').reverse().join('-')}</td>
                                        <td>{data.closed.date_debut_stage.split('T')[0].split('-').reverse().join('-')}</td>
                                        <td>{data.closed.type_de_stage}</td>
                                        <td className='text-center'>
                                            <i onClick={(e) => {
                                               e.target.parentNode.innerHTML =
                                                        `<div class="spinner-grow" role="status">
                                                          <span class="sr-only">Loading...</span>
                                                        </div>`;
                                                download({
                                                    id: data.closed._id,
                                                    nom: data.nom,
                                                    prenom: data.prenom,
                                                    date_debut: data.closed.date_debut_stage
                                                })
                                            }
                                            }
                                               className="nv-download fas fa-download fa-lg"/>
                                        </td>
                                    </tr>
                                )) : null
                        }
                        </tbody>
                    </Table>
                }
                {typeof closedList === "string" ?
                    <span className='nv-empty-msg'>{closedList.split(":").pop()}</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadClosedList, closedList, loadAttestation, attestation}) => {
    return ({
        loadClosedList, closedList,
        loadAttestation, attestation
    });
};


export default connect(mapStateToProps, {loadInternshipsClosed, loadDeleteInternship, loadAttestation})(ClosedList);

