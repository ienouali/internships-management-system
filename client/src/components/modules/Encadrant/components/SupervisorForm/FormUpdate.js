import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import Col from "../../../../basicComponents/Col";
import Button from "../../../../basicComponents/Button";
import Form from "../../../../basicComponents/Form";
import FormGroup from "../../../../basicComponents/FormGroup";
import Label from "../../../../basicComponents/Label";
import Legend from "../../../../FunctionalComponents/Legend/Legend";
import Row from "../../../../basicComponents/Row";
import {updateSupervisor} from '../../../../../actions/supervisor/updateSupervisorAction';
import {loadSupervisor} from "../../../../../actions/supervisor/getSupervisorAction";
import { required, maxLength, number, email,  renderInput } from '../../../../../validator/RF_Validator';
import Container from "../../../../basicComponents/Container";
import {useTranslation} from "react-i18next";

const FormUpdate = ({...props}) => {
    const {t} = useTranslation();

   const {loadSupervisor,handleSubmit} = props;

    useEffect(() => {
        const pathName = window.location.pathname.split('/');
        const supervisorID = pathName[3];
        loadSupervisor(supervisorID);
        return () => {
        };
    }, [loadSupervisor]);

    return (
        <Container fluid className='nv-main-content mb-5 mt-5'>
            <Form onSubmit={handleSubmit((data) => props.updateSupervisor(data,props.history.push('/encadrants')))} className="mt-5 p-5 p-3">
                <Legend desc={t('formForUpdateSupervisor')}>{t('updateSupervisorInfos')}</Legend>
                <p className='font-weight-normal'><i className="fa fa-user"/>&nbsp;{t('personalInformation')}</p>
                <Row>
                <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                    <FormGroup className="mb-1">
                        <Label id='element' for="nom" sm={10}> {t('firstName')}</Label>
                        <Field
                            autoComplete="off"
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder={t('firstName')}
                            component={renderInput}
                            validate={[required, maxLength(20)]}
                        />
                    </FormGroup>
                </Col>
                <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                    <FormGroup className="mb-1">
                        <Label for="prenom" sm={10}>{t('lastName')}</Label>
                        <Field
                            autoComplete="off"
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder={t('lastName')}
                            component={renderInput}
                            validate={[required, maxLength(20)]}
                        />
                    </FormGroup>
                </Col>

                <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
                    <FormGroup className="mb-1">
                        <Label for="tel" sm={10}>{t('phone')}</Label>
                        <Field
                            autoComplete="off"
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder={t('phone')}
                            component={renderInput}
                            validate={[required, number]}
                        />
                    </FormGroup>
                </Col>
                <Col lg={{size: 6, offset: 0}} md={{size: 12, offset: 0}} sm={{size: 12, offset: 0}} xs={{size: 12, offset: 0}}>
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
                <Col>
                    <FormGroup check row>
                        <Button
                            type='submit'>
                            <i className={'mr-2 fas fa-user-tie'}/>&nbsp; {t('btnUpdateInformation')}
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        </Container>

    );
};
const mapStateToProps = ({loadUpdateSupervisor,supervisor}) => {
    return {
        loadUpdateSupervisor,supervisor, initialValues : {...supervisor}
    }
};

export default connect(mapStateToProps, {loadSupervisor,updateSupervisor})(reduxForm({
    enableReinitialize: true,
    form: 'FormUpdate'
})(FormUpdate));
