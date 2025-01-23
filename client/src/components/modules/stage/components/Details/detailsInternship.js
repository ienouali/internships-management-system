import React, {Fragment, useEffect} from 'react';
import moment from 'moment';
import Container from "../../../../basicComponents/Container";
import Col from "../../../../basicComponents/Col";
import Row from "../../../../basicComponents/Row";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import {loadDetailsInternship} from './../../../../../actions/internship/detailsInternshipAction';
import {connect} from "react-redux";
import Loader from "../../../../FunctionalComponents/Loader/Loader";
import {useTranslation} from "react-i18next";


const DetailsInternship = (props) => {
    const {t} = useTranslation();
    const {loadDetailsInternship,detailsInternship,loadDetailsInter} = props;
    useEffect(() => {
        const pathName = window.location.pathname.split('/');
        const internshipID = pathName[3];
        loadDetailsInternship(internshipID);
        return () => {
        };
    }, [loadDetailsInternship]);

    const mb = 'mb-5', textDetails = 'nv-details';
    return (
        <Container fluid className='nv-main-content mt5'>
                <div className='bg-light mt-5 p-5 p-3'>
                    <Legend>{t('detailsInternship')}</Legend>
                    {loadDetailsInter ? <Loader/> :
                  <Fragment>
                    <Row className='mt-5'>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('fullName')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.nom} ${detailsInternship.trainee.prenom}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('civility')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.civilite}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('birthday')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.date_naissance.split('T')[0]}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('email')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.email}` : '' } </strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('phone')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.tel}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('address')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.adresse}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('cin')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.cin}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('civilStatus')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.etat_civil}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('formation')}  :&nbsp;
                                <strong>Génie informatique</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('linkedIn')}  :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.trainee.linkedin}` : '' }</strong>
                            </span>
                        </Col>

                        <Col className={`${mb}`} md={12}><span className={`${textDetails}`}/></Col>
                    </Row>
                    <Row>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('supervisor')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.supervisor.firstname} ${detailsInternship.supervisor.lastname}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('agency')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.internship.agence}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('typeOfInternship')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.internship.type_de_stage}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('subject')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.internship.sujet}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('startDate')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.internship.date_debut_stage.split('T')[0]}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('endDate')}  :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.internship.date_fin_stage.split('T')[0]}` : '' }</strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('duration')} :&nbsp;
                                <strong>
                                    {
                                         detailsInternship ?
                                        `${moment(detailsInternship.internship.date_fin_stage).diff(detailsInternship.internship.date_debut_stage, 'month') === 0 ?
                                         moment(detailsInternship.internship.date_fin_stage).diff(detailsInternship.internship.date_debut_stage, 'week') +' '+ t('week') :
                                         moment(detailsInternship.internship.date_fin_stage).diff(detailsInternship.internship.date_debut_stage, 'month') +' '+ t('month')}`
                                         : ''
                                    }
                                </strong>
                            </span>
                        </Col>
                        <Col className={`${mb}`} md={4}>
                            <span className={`${textDetails}`}>{t('department')} :&nbsp;
                                <strong>{detailsInternship ?  `${detailsInternship.internship.departement}` : '' }</strong>
                            </span>
                        </Col>
                    </Row>
                  </Fragment>
                    }
                </div>

        </Container>
    );
};

const mapStateToProps = ({loadDetailsInter,detailsInternship}) => {
    return ({loadDetailsInter,detailsInternship})
};

export default connect(mapStateToProps, {loadDetailsInternship})(DetailsInternship);
