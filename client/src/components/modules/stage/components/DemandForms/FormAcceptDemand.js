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
    number,
    email,
    renderSelect,
    renderInput, isValidDate
}  from '../../../../../validator/RF_Validator';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";


const FormAcceptDemand = (props) => {
    const options_civilite = [
        {value: 'Homme', label: 'Homme'},
        {value: 'Femme', label: 'Femme'},
    ];
    const options_Etat = [
        {value: 'Celibataire', label: 'Celibataire'},
        {value: 'Marié', label: 'Marié'},
    ];
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
        return () => {
        };
    }, [loadDemand,loadSupervisors]);

    let options_supervisors;
    if(supervisors) {
        if(typeof supervisors === 'string') {
            options_supervisors = [ {value: '', label: ''}]
        }else {
            options_supervisors = supervisors.map(supervisor => {
                return {value: supervisor._id, label: `${supervisor.firstname} ${supervisor.lastname}`}
            });
        }
    }

    const [internshipDate, setInternshipDate] = useState({});
    const handleChangeDate = (e) => {
        const {value,name} = e.target;
        setInternshipDate({
            ...internshipDate,
            [name]:value
        });
    };

    const {t} = useTranslation();
    return (
        <Container fluid className='nv-main-content mb-5'>
            <Form method='POST' onSubmit={handleSubmit((data) => props.acceptDemand(data, () => props.history.push('/stages/encours')) )} className="mt-3 p-5 p-3">
                <Legend desc={t('fillEmptyFieldsInPageAcceptDemand')}>
                    {t('acceptDemandOf')} :  <strong className='text-uppercase '>{demand ?` ${demand.nom} ${demand.prenom}` : ''}</strong>
                </Legend>

                <p className={`font-weight-normal`}><i className="fa fa-file"/>&nbsp;
                    {t('internshipInformation')}</p>

                <Row form>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
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
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='mt-2' for="date_debut">{t('startDate')}</Label>
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
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
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
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
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

                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
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
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
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
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='mt-2' for="exampleSelect">{t('typeOfInternship')}</Label>
                            <Field
                                type="select"
                                name="type_de_stage"
                                placeholder={t('typeOfInternship')}
                                id="type_stage"
                                className='rounded-pill border-0 shadow-sm p-1 pb-1'
                                component={renderSelect}
                                validate={[required]}
                                options={options_stages}
                            />
                        </FormGroup>
                    </Col>

                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="linkedin" sm={10}>{t('linkedIn')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="linkedin"
                                id="linkedin"
                                placeholder="linkedin du stagiaire"
                                component={renderInput}
                                validate={[maxLength15]}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1" style={{display:typeof supervisors === 'string' ? 'none' : 'block'}}>
                            <Label className='nv-lb' for="exampleSelect">{t('supervisor')}</Label>
                             <Field
                                id="supervisor"
                                name="supervisor"
                                placeholder='Encadrant'
                                component={renderSelect}
                                validate={[required]}
                                options={options_supervisors}
                            />
                        </FormGroup>
                        <FormGroup className="mb-3 mt-0">
                        {typeof supervisors === 'string' ?
                            <div className='nv-empty-msg mt-5 ml-3'>
                                <span> {t('msgEmptyListOfSupervisors')} </span>
                                <NavLink exact activeClassName='nv-child-links_active' className='nv-warning-link' to='/encadrants/ajouter'>{t('newSupervisor')}</NavLink>
                            </div> : ''}
                       </FormGroup>
                    </Col>
                </Row>
                <p className={`font-weight-normal`}><i className="fa fa-user"/>&nbsp; {t('personalInformation')}</p>
                <Row form>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label className='nv-lb' for="exampleSelect">{t('civility')}</Label>
                            <Field
                                id="civilite"
                                name="civilite"
                                placeholder={t('civility')}
                                component={renderSelect}
                                validate={[required]}
                                options={options_civilite}

                            />
                        </FormGroup>
                    </Col>
                    {/* md={{ size: 5, offset: 0 }} */}
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="nom" sm={10}>{t('firstName')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="nom"
                                id="nom"
                                placeholder={t('firstName')}
                                component={renderInput}
                                validate={[required, maxLength15]}

                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup className="mb-1">
                            <Label for="prenom" sm={10}>{t('lastName')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="prenom"
                                id="prenom"
                                placeholder={t('lastName')}
                                component={renderInput}
                                validate={[required, maxLength15]}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='mt-2 ml-2' for="exampleSelect">{t('birthday')}</Label>
                            <Field
                                component={renderDatePicker}
                                validate={[required]}
                                name="date_naissance"
                                id="date"
                            >
                            </Field>
                        </FormGroup>
                    </Col>

                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="tel" sm={10}>{t('phone')}</Label>
                            <Field
                                autoComplete="off"
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder={t('phone')}
                                component={renderInput}
                                validate={[required, number]}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="email" sm={10}>{t('email')}</Label>
                            <Field
                                autoComplete="off"
                                type="email"
                                name="email"
                                id="email"
                                placeholder={t('email')}
                                component={renderInput}
                                validate={[required, email]}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="adresse" sm={10}>{t('address')}</Label>
                            <Field
                                autoComplete="off"
                                type="address"
                                name="adresse"
                                id="adresse"
                                placeholder={t('address')}
                                component={renderInput}
                                validate={[required, maxLength(100)]}
                            />
                        </FormGroup>
                    </Col>
                    {/* md={{ size: 5, offset: 0 }} */}
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="cin" sm={10}>{t('cin')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="cin"
                                id="cin"
                                placeholder={t('cin')}
                                component={renderInput}
                                validate={[required, maxLength(7)]}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='nv-lb' for="exampleSelect">{t('civilStatus')}</Label>
                            <Field
                                name="etat_civil"
                                id="etatCivil"
                                placeholder={t('civilStatus')}
                                component={renderSelect}
                                validate={[required, maxLength15]}
                                options={options_Etat}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Col>
                    <FormGroup style={{display : typeof supervisors === 'string' ? 'none' : 'block'}} check row>
                        <Button
                            disabled = {
                                demand ?  demand.date_debut_stage.split('T')[0] >= internshipDate.date_fin_stage : false}>
                        <i className="fas fa-check-circle"/>&nbsp; {t('btnAcceptDemand')}
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
    form: 'FormAcceptDemand'
})(FormAcceptDemand));
