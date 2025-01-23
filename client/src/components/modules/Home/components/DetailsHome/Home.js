import React from "react";
import Container from "../../../../basicComponents/Container";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Card from "../../../../FunctionalComponents/Card/Card";
import Row from "../../../../basicComponents/Row";
import Table from "../../../../basicComponents/Table";
import Col from "../../../../basicComponents/Col";
import {Progress} from "reactstrap";
import {useTranslation} from "react-i18next";


const Home = ({...props}) => {

    const {t} = useTranslation();

        return (
        <Container className='nv-main-content mb-5  mt-0' fluid={true}>

            <div className='bg-white mt-3 p-5 p-3'>
                <Legend>{t('home')}</Legend>
                <p className={`font-weight-normal`}>{t('NumberOfTraineesByCategory')}</p>
                <Row>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <Card
                            className='h-75'
                            counter={34}
                            iconTitle='fas fa-code'
                            cardTitle={t('development').toUpperCase()}
                        /></Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <Card
                            className='h-75'
                            counter={14}
                            iconTitle='fas fa-code'
                            cardTitle={t('rpa').toUpperCase()}
                        /></Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <Card
                            className='h-75'
                            counter={34}
                            iconTitle='fas fa-user'
                            cardTitle={t('hr')}
                        /></Col>
                </Row>
                <Row>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <Card
                            className='h-75'
                            iconTitle='fas fa-file-alt'
                            cardTitle={t('demandsInternship')}
                            count='13'/>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <Card
                            className='h-75'
                            iconTitle='fas fa-users'
                            cardTitle={t('trainees')}
                            count='4'/>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <Card
                            className='h-75'
                            iconTitle='fas fa-clone'
                            cardTitle={t('pfe')}
                            count='3'
                        /> </Col>
                </Row>

                <Row className='mt-5'>
                    <Col lg={{size: 12, offset: 0}}  md={{size: 10, offset: 1}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <p>{t('almostCompleted')}</p>
                        <Table responsive borderless className="bg-white text-center pb-5">
                            <thead>
                            <tr>
                                <th>{t('fullName')}</th>
                                <th>{t('typeOfInternship')}</th>
                                <th>{t('duration')}</th>
                                <th>{t('endDate')}</th>
                                <th className='w-25'>{t('progress')}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Alami Anass</td>
                                <td>PFE</td>
                                <td>6 mois</td>
                                <td>18/06/2020</td>
                                <td><Progress color="info" value="75">75%</Progress></td>
                            </tr>
                            <tr>
                                <td>hassan hina</td>
                                <td>Alternance</td>
                                <td>3 mois</td>
                                <td>18/06/2020</td>
                                <td><Progress color="info" value="50">50%</Progress></td>
                            </tr>
                            <tr>
                                <td>maria salami</td>
                                <td>PFA</td>
                                <td>2 mois</td>
                                <td>18/06/2020</td>
                                <td><Progress color="info" value="35">55%</Progress></td>
                            </tr>
                            <tr>
                                <td>hassan hina</td>
                                <td>PFA</td>
                                <td>4 mois</td>
                                <td>18/06/2020</td>
                                <td><Progress color="info" value="60">60%</Progress></td>
                            </tr>
                            <tr>
                                <td>maria salami</td>
                                <td>PFE</td>
                                <td>6 mois</td>
                                <td>18/06/2020</td>
                                <td><Progress color="info" value="95">95%</Progress></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Home;