import React, {useEffect, useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import Container from "../../../../basicComponents/Container";
import Col from "../../../../basicComponents/Col";
import Button from "../../../../basicComponents/Button";
import Form from "../../../../basicComponents/Form";
import FormGroup from "../../../../basicComponents/FormGroup";
import Label from "../../../../basicComponents/Label";
import Row from "../../../../basicComponents/Row";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import {loadSupervisors} from "../../../../../actions/supervisor/supervisorsAction";
import {loadDemand} from '../../../../../actions/demand/getDemandAction';
import {acceptDemand} from '../../../../../actions/demand/acceptDemandAction';

import {
    required,
    maxLength,
    maxLength15,
    renderDatePicker,
    renderSelect,
    renderInput, isValidDate
}
    from '../../../../../validator/RF_Validator';
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";


const FormUpdateInternship = (props) => {
    const {t} = useTranslation();
    const options_agence = [
        {value: 'Rabat', label: 'Rabat'},
        {value: 'Oujda', label: 'Oujda'},
    ];
    const options_formations = [
        {value: 'Génie Informatique', label: 'Génie Informatique'},
        {value: `Ingénierie des systémes d'informations`, label: `Ingénierie des systémes d'informations`},
        {value: `Génie Logiciel`, label: `Génie Logiciel`},
    ];
    const options_departement = [
        {value: 'DEVELOPEMENT', label: 'DEVELOPEMENT'},
        {value: 'RH', label: 'RH'},
        {value: 'RPA', label: 'RPA'},
    ];
    const options_stages = [
        {value: 'Stage PFE', label: 'Stage PFE'},
        {value: 'Stage PFA', label: 'Stage PFA'},
        {value: 'Stage Technique', label: 'Stage Technique'},
        {value: 'Stage Alternance', label: 'Stage Alternance'},
    ];


    const {
        loadSupervisors, loadDemand, demand, supervisors,
        handleSubmit
    } = props;

    useEffect(() => {
        const pathName = window.location.pathname.split('/');
        const Demand_ID = pathName[3];
        loadDemand(Demand_ID);
        loadSupervisors();
        return () => {};
    }, [loadDemand,loadSupervisors]);


    const options_supervisors = supervisors.map(supervisor => {
        return {value: supervisor._id, label: `${supervisor.firstname} ${supervisor.lastname}`}
    });
    const [internshipDate, setInternshipDate] = useState({});
    const handleChangeDate = (e) => {
        const {value,name} = e.target;
        setInternshipDate({
            ...internshipDate,
            [name]:value
        });
    };

    return (
        <Container fluid className='nv-main-content mb-5'>
            <Form method='POST' onSubmit={handleSubmit((data) => props.acceptDemand(data, () => props.history.push('/stages/encours')))} className="mt-3 p-5 p-3">
                <Legend desc={t('formForUpdateInternship')}>
                    {t('updateInternship')}  :  <strong className='text-uppercase '>{demand ?` ${demand.nom} ${demand.prenom}` : ''}</strong>
                </Legend>

                <Row form>
                    <Col
                         lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label id='element' for="linkedin" sm={10}>{t('subject')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="sujet"
                                id="sujet"
                                placeholder={t('subject')}
                                component={renderInput}
                                validate={[required, maxLength(30)]}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 3, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='mt-2' for="date_debut">{t('startDate')} </Label>
                            <Field
                                onChange= { (e) => handleChangeDate(e)}
                                type="date"
                                name="date_debut_stage"
                                id="date_debut"
                                component={renderDatePicker}
                                validate={[required]}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 3, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label className='mt-2' for="date_fin">{t('endDate')}</Label>
                            <Field
                                onChange= { (e) => handleChangeDate(e)}
                                type="date"
                                name="date_fin_stage"
                                id="date_fin"
                                component={renderDatePicker}
                                validate={[required]}
                            />
                            { demand ? isValidDate(demand.date_debut_stage.split('T')[0],internshipDate.date_fin_stage) : null}
                        </FormGroup>
                    </Col>
                        <Col
                            lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                            <FormGroup className="mb-1 ">
                                <Label className='nv-lb' for="exampleSelect">{t('agency')}</Label>
                                <Field
                                    name="agence"
                                    placeholder={t('agency')}
                                    component={renderSelect}
                                    validate={[required, maxLength15]}
                                    options={options_agence}
                                />
                            </FormGroup>
                        </Col>
                        <Col
                            lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                            <FormGroup className="mb-1 ">
                                <Label className='mt-2' for="exampleSelect">{t('typeOfInternship')}</Label>
                                <Field
                                    type="select"
                                    name="type_de_stage"
                                    id="type_stage"
                                    className='rounded-pill border-0 shadow-sm p-1 pb-1'
                                    component={renderSelect}
                                    validate={[required]}
                                    options={options_stages}
                                />
                            </FormGroup>
                        </Col>

                </Row>
                <Row form>
                    <Col
                        lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='nv-lb' for="exampleSelect">{t('department')}</Label>
                            <Field
                                name="departement"
                                id="departement"
                                placeholder={t('department')}
                                component={renderSelect}
                                validate={[required]}
                                options={options_departement}
                            />
                        </FormGroup>
                    </Col>
                    <Col
                        lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='nv-lb' for="exampleSelect">{t('formation')}</Label>
                            <Field
                                name="formation"
                                id="formation"
                                placeholder={t('formation')}
                                component={renderSelect}
                                validate={[required, maxLength(50)]}
                                options={options_formations}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label className='nv-lb' for="exampleSelect">{t('supervisor')}</Label>
                            <Field
                                id="supervisor"
                                name="supervisor"
                                placeholder={t('supervisor')}
                                component={renderSelect}
                                validate={[required]}
                                options={options_supervisors}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="commentaire" sm={10}> {t('comment')}</Label>
                            <Field
                                autoComplete="off"
                                type="textarea"
                                name="commentaire"
                                id="commentaire"
                                placeholder={t('comment')}
                                component={renderInput}
                                validate={[]}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Col>
                    <FormGroup check row>
                        <Button
                            disabled = { demand ?  demand.date_debut_stage.split('T')[0] >= internshipDate.date_fin_stage : false}>
                        <i className="fas fa-check-circle"/>&nbsp; {t('btnUpdateInformation')}
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );
};

const mapStateToProps = ({supervisors, demand, trainee, loadingAcceptAndUpdating }) => {
    return ({
        supervisors,
        demand,
        trainee,
        initialValues: {...demand, ...trainee},
        loadingAcceptAndUpdating,
    })
};

export default connect(mapStateToProps, {loadSupervisors,loadDemand,acceptDemand})(reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateInternship'
})(FormUpdateInternship));
