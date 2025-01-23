import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import Col from "../../../../basicComponents/Col";
import Button from "../../../../basicComponents/Button";
import Form from "../../../../basicComponents/Form";
import FormGroup from "../../../../basicComponents/FormGroup";
import Label from "../../../../basicComponents/Label";
import Input from "../../../../basicComponents/Input";
import Row from "../../../../basicComponents/Row";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import {loadTrainee} from "../../../../../actions/trainee/getTraineeAction";
import {updateTrainee} from '../../../../../actions/trainee/updateTraineeAction';
import {
    required, maxLength, maxLength15, renderDatePicker, number, email, renderSelect, renderInput
}
    from '../../../../../validator/RF_Validator';
import Container from "../../../../basicComponents/Container";
import {useTranslation} from "react-i18next";

const FormUpdateTrainee = ({...props}) => {
    const {t} = useTranslation();
    const options_civilite = [
        {value: 'Homme', label: 'Homme'},
        {value: 'Femme', label: 'Femme'},
    ];
    const options_Etat = [
        {value: 'Celibataire', label: 'Celibataire'},
        {value: 'Marié', label: 'Marié'},
    ];
    const options_formations = [
        {value: 'Génie Informatique', label: 'Génie Informatique'},
        {value: `Ingénierie des systémes d'informations`, label: `Ingénierie des systémes d'informations`},
        {value: `Génie Logiciel`, label: `Génie Logiciel`},
    ];

    const {handleSubmit, loadTrainee} = props;

    useEffect(() => {
        const pathName = window.location.pathname.split('/');
        const traineeID = pathName[3];
        loadTrainee(traineeID);
        return () => {
        };
    }, [loadTrainee]);

    return (
        <Container fluid className='nv-main-content mt-0'>
            <Form method='POST' onSubmit={handleSubmit((data) => props.updateTrainee(data,props.history.push('/stagiaires') ))} className="bg-light mt-3 p-5 p-3">
                <Legend desc={t('formForUpdateTrainee')}>
                    {t('updateTrainee')}</Legend>
                <Row form>
                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label id='element' className='nv-lb' for="exampleSelect">{t('civility')}</Label>
                            <Field
                                id="civilite"
                                name="civilite"
                                placeholder={t('civility')}
                                component={renderSelect}
                                validate={[required, maxLength15]}
                                options={options_civilite}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
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

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="prenom" sm={10}> {t('lastName')}</Label>
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

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
                            <Label className='mt-2' for="exampleSelect">{t('birthday')}</Label>
                            <Field
                                component={renderDatePicker}
                                validate={[required]}
                                name="date_naissance"
                                id="date">
                            </Field>
                        </FormGroup>
                    </Col>

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="tel" sm={10}> {t('phone')}</Label>
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
                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="email" sm={10}> {t('email')}</Label>
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

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="adresse" sm={10}>{t('address')}</Label>
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

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="cin" sm={10}>{t('cin')}</Label>
                            <Field
                                autoComplete="off"
                                type="text"
                                name="cin"
                                id="cin"
                                placeholder={t('cin')}
                                component={renderInput}
                                validate={[maxLength(7)]}
                            />
                        </FormGroup>
                    </Col>

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1 ">
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

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
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

                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
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
                    <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                        <FormGroup className="mb-1">
                            <Label for="cv" sm={10}>{t('cv')}</Label>
                            <Input
                                autoComplete="off"
                                type="file"
                                name="cv"
                                id="cv"
                                placeholder={t('cv')}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Col>
                    <FormGroup check row>
                        <Button
                            type='submit'>
                            <i className="fas fa-file-alt"/>&nbsp; {t('btnUpdateInformation')}
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );
};

const mapStateToProps = ({loadTrainee, trainee}) => {
    return {loadTrainee, trainee, initialValues: {...trainee}}
};

export default connect(mapStateToProps, {loadTrainee, updateTrainee})(reduxForm({
    enableReinitialize: true,
    form: 'FormUpdateTrainee'
})(FormUpdateTrainee));