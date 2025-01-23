import React, { useState} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Col from "../../../../basicComponents/Col";
import Button from "../../../../basicComponents/Button";
import Form from "../../../../basicComponents/Form";
import FormGroup from "../../../../basicComponents/FormGroup";
import Label from "../../../../basicComponents/Label";
import Row from "../../../../basicComponents/Row";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import {Add_demand} from '../../../../../actions/demand/addDemandAction';
import {
    required,
    maxLength,
    maxLength15,
    renderDatePicker,
    number,
    email,
    renderSelect,
    renderInput, FileInput, ifEqualToday, isValidDate
} from '../../../../../validator/RF_Validator';
import Container from "../../../../basicComponents/Container";
import {useTranslation} from "react-i18next";

const FormAddDemand = (props) => {
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

    const {handleSubmit } = props;
    const [internshipDate, setInternshipDate] = useState({});
        const handleChangeDate = (e) => {
          const {value,name} = e.target;
          setInternshipDate({
              ...internshipDate,
              equalToday: e.target.name === 'date_fin_stage',
              [name]:value
          });
        };
    const {t} = useTranslation();
    return (
        <Container fluid className='nv-main-content'>
            <Form method='POST'
                  onSubmit={handleSubmit((data) =>  props.Add_demand(data, () => props.history.push('/stages/demandes')))}
                  className="bg-white mt-3 p-5 p-3">
                <Legend  desc={t('formForNewDemand')}>
                    {t('newDemand')}</Legend>
                <p className={`font-weight-normal`}><i className="fa fa-user"/> {t('personalInformation')}</p>
                <Row form>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label id='element' className='nv-lb' for="civilite">{t('civility')}</Label>
                            <Field
                                id="civilite"
                                name="civilite"
                                placeholder='Civilité'
                                component={renderSelect}
                                validate={[required, maxLength15]}
                                options={options_civilite}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
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
                        <FormGroup>
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
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label className='mt-2 ml-2' for="exampleSelect">
                                {t('birthday')}</Label>
                            <Field
                                component={renderDatePicker}
                                validate={[required]}
                                name="date_naissance"
                                id="date">
                            </Field>
                        </FormGroup>
                    </Col>

                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
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
                        <FormGroup>
                            <Label for="email" sm={10}>{t('email')}</Label>
                            <Field
                                autoComplete="off"
                                type="email"
                                name="email"
                                id="email"
                                placeholder={t('email')}
                                component={renderInput}
                                validate={[ email]}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}}>
                        <FormGroup>
                            <Label  for="adresse" sm={10}>{t('address')}</Label>
                            <Field
                                autoComplete="off"
                                type="adress"
                                name="adresse"
                                id="adresse"
                                placeholder={t('address')}
                                component={renderInput}
                                validate={[maxLength(100)]}
                            />
                        </FormGroup>
                    </Col>
                    {/* md={{ size: 5, offset: 0 }} */}
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label for="cin" sm={10}>{t('cin')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="cin"
                                id="cin"
                                placeholder={t('cin')}
                                component={renderInput}
                                validate={[maxLength(10)]}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label className='nv-lb' for="exampleSelect">{t('civilStatus')}</Label>
                            <Field
                                name="etat_civil"
                                id="etatCivil"
                                placeholder={t('civilStatus')}
                                component={renderSelect}
                                validate={[maxLength15]}
                                options={options_Etat}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <p className={`mt-5 font-weight-normal`}><i className="fa fa-file"/> {t('internshipInformation')}</p>
                <Row form>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label id='toto' className='mt-2 ml-2' for="date_debut">{t('startDate')}</Label>
                            <Field
                                onChange = { (e) => handleChangeDate(e)}
                                type="date"
                                name="date_debut_stage"
                                id="date_debut"
                                component={renderDatePicker}
                                validate={[required]}
                            />
                            {
                                internshipDate.date_debut_stage < ifEqualToday()  &&  !internshipDate.equalToday?
                                    <span className='nv-warning-text mt-5 ml-3'>
                                        {t('msgDifferentDate')}
                                       <button className='nv-warning-btn' key={Math.random() * 100} onClick={(e) => {
                                           e.preventDefault();
                                          setInternshipDate({...internshipDate,equalToday: true});
                                       }}>{t('ignore')}</button>
                                  </span> : null
                            }
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label className='mt-2 ml-2' for="date_fin">{t('endDate')}</Label>
                            <Field
                                onChange= { (e) => handleChangeDate(e)}
                                type="date"
                                name="date_fin_stage"
                                id="date_fin"
                                component={renderDatePicker}
                                validate={[required]}
                            />
                            {isValidDate(internshipDate.date_debut_stage,internshipDate.date_fin_stage)}

                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label className='nv-lb' for="exampleSelect">{t('typeOfInternship')}</Label>
                            <Field
                                type="select"
                                name="type_de_stage"
                                id="type_stage"
                                playceholder={t('typeOfInternship')}
                                component={renderSelect}
                                validate={[required]}
                                options={options_stages}
                            />
                        </FormGroup>
                    </Col>

                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
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

                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label className='nv-lb' for="exampleSelect">{t('agency')}</Label>
                            <Field
                                name="agence"
                                placeholder={t('agency')}
                                component={renderSelect}
                                validate={[required]}
                                options={options_agence}
                            />
                        </FormGroup>
                    </Col>
                    <Col xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
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
                        xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label for="linkedin" sm={10}>{t('linkedIn')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="linkedin"
                                id="linkedin"
                                placeholder={t('linkedIn')}
                                component={renderInput}
                                validate={[maxLength15]}
                            />
                        </FormGroup>
                    </Col>
                    <Col className='mt-3'
                         xl={{size: 4, offset: 0}} lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} >
                        <FormGroup>
                            <Label for="cv" sm={10}>{t('cv')}</Label>
                            <Field name="cv" component={FileInput} type="file"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Col>
                    <FormGroup check row>
                        <Button
                            disabled = {internshipDate.date_debut_stage >= internshipDate.date_fin_stage ||  internshipDate.equalToday ===false }
                            type='submit'>
                            <i className='fas fa-file-alt'/>&nbsp; {t('saveDemand')}
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );
};

const mapStateToProps = ({loadingAdd}) => {
    return {
        loadingAdd
    }
};


export default connect(mapStateToProps, {Add_demand})(reduxForm({
    form: 'FormAddDemand'
})(FormAddDemand));