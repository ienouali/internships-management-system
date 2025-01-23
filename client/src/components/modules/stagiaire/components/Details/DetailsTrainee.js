import React, {Fragment, useEffect} from 'react';
import moment from 'moment';
import Container from "../../../../basicComponents/Container";
import Col from "../../../../basicComponents/Col";
import Row from "../../../../basicComponents/Row";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import {loadDetailsTrainee} from './../../../../../actions/trainee/detailsTraineeAction';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import Table from "../../../../basicComponents/Table";
import {useTranslation} from "react-i18next";


const DetailsTrainee = (props) => {
    const {t} = useTranslation();
   const {loadDetailsTrainee, loadingDetailsTrainee, detailsTrainee} = props;
    useEffect(() => {
        const pathName = window.location.pathname.split('/');
        const traineeID = pathName[3];
        loadDetailsTrainee(traineeID);
        return () => {
        };
    }, [loadDetailsTrainee]);


    const mb = 'mb-5', textDetails = 'nv-details';  //nvStrong='nv-strong';
    return (
        <Container fluid className='nv-main-content mt5'>
            <div className='bg-light mt-5 p-5 p-3'>
                <Legend>{t('detailsTrainee')}</Legend>
                {loadingDetailsTrainee ? <Loader/> :
                    <Fragment>
                        <Row className='mt-5'>

                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('fullName')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.nom} ${detailsTrainee.trainee.prenom}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('civility')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.civilite}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('birthday')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.date_naissance.split('T')[0]}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('email')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.email}` : ''} </strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('phone')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.tel}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('address')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.adresse}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('cin')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.cin}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('civilStatus')} :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.etat_civil}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('formation')}  :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.formation}` : ''} </strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('linkedIn')}  :&nbsp;
                                <strong>{detailsTrainee ? `${detailsTrainee.trainee.linkedin}` : ''}</strong>
                            </span>
                            </Col>
                            <Col className={`${mb}`} md={12}><span className={`${textDetails}`}/>
                            </Col>
                        </Row>
                           <Legend>{t('internshipIn')}</Legend>
                        <Table  responsive borderless className="mt-3 pb-3">
                            <thead>
                            <tr>
                                <th>{t('agency')}</th>
                                <th>{t('typeOfInternship')}</th>
                                <th>{t('startDate')}</th>
                                <th>{t('endDate')}</th>
                                <th>{t('details')}</th>
                            </tr>
                            </thead>
                            <tbody>{
                                detailsTrainee ? detailsTrainee.internships.map(internship =>
                                    <tr key={internship._id}>
                                        <td>{internship.agence}</td>
                                        <td>{internship.type_de_stage}</td>
                                        <td>{moment(new Date(internship.date_debut_stage)).format("LL")}</td>
                                        <td>{moment(new Date(internship.date_fin_stage)).format("LL")}</td>
                                        <td className='nv-lowercase'>
                                            <NavLink to={`/stages/details/${internship._id}`}>
                                                <p className='nv-card-color' >
                                                    &nbsp; <i className="fas fa-angle-double-right"/></p>
                                            </NavLink>
                                        </td>
                                    </tr>
                                  ) : null
                            }</tbody>
                        </Table>
                    </Fragment>
                }
            </div>
        </Container>
    );
};

const mapStateToProps = ({loadingDetailsTrainee, detailsTrainee}) => {
    return ({loadingDetailsTrainee, detailsTrainee})
};

export default connect(mapStateToProps, {loadDetailsTrainee})(DetailsTrainee);
