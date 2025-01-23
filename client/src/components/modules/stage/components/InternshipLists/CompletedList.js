import React, { useEffect} from 'react';
import moment from 'moment';
import Table from '../../../../basicComponents/Table';
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Container from "../../../../basicComponents/Container";
import {loadInternshipsCompleted} from "../../../../../actions/internship/internshipsCompletedAction";
import {connect} from "react-redux";
import {confirmAlert} from "react-confirm-alert";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {closeInternship} from '../../../../../actions/internship/closeInternshipAction';
import {useTranslation} from "react-i18next";


const CompletedList = ({...props}) => {
    const {t} = useTranslation();
    const {loadInternshipsCompleted, loadCompletedList, completedList, closeInternship} = props;

    const confirm = (id) => {
        confirmAlert({
            title: 'confirmation',
            message:t('msgCloseInternship'),
            buttons: [
                {
                    label: t('yes'),
                    onClick: () => {  closeInternship(id); }
                },
                {
                    label: t('no'),
                    onClick: () => false
                }
            ]
        });
    };

    useEffect(() => {
        loadInternshipsCompleted();
        return () => {
        };
    }, [loadInternshipsCompleted]);


    return (
        <Container fluid className='nv-main-content'>
            <div className='nv-list bg-light mt-3 p-5 p-3'>
                <Legend>{t('listCompletedInternship')}</Legend>
                {loadCompletedList ? <Loader/> :
                    <Table responsive borderless className="mt-5 pb-5">
                        <thead>
                        <tr>
                            <th>{t('fullName')}</th>
                            <th>{t('agency')}</th>
                            <th>{t('department')}</th>
                            <th>{t('startDate')}</th>
                            <th>{t('endDate')}</th>
                            <th>{t('typeOfInternship')}</th>
                            <th>{t('decision')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            typeof completedList  !== "string" ?
                            completedList.map(data => (
                                <tr key={data.completed._id}>
                                    <td>{`${data.nom} ${data.prenom}`}</td>
                                    <td>{data.completed.agence}</td>
                                    <td>{data.completed.departement}</td>
                                    <td>{data.completed.date_debut_stage.split('T')[0].split('-').reverse().join('-')}</td>
                                    <td>{data.completed.date_fin_stage.split('T')[0].split('-').reverse().join('-')}</td>

                                    <td>{data.completed.type_de_stage}</td>
                                    <td>
                                        <button className='text-uppercase btn btn-white  pt-0 pb-0 text-secondary'
                                               onClick={() => confirm(data.completed._id)}>
                                            {t('btnClose')}&nbsp;&nbsp;<i className="far fa-check-square"/></button>
                                    </td>
                                </tr>
                            )) : null
                        }
                        </tbody>
                    </Table>
                }
                { typeof completedList  === "string" ? <span className='nv-empty-msg'>{ completedList.split(":").pop() }</span> : ''}
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadCompletedList, completedList}) => {
    return ({
        loadCompletedList,
        completedList
    });
};


export default connect(mapStateToProps, {loadInternshipsCompleted, closeInternship})(CompletedList);

