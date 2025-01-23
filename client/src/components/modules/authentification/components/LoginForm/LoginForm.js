import React, {  Fragment} from "react";
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import Col from "../../../../basicComponents/Col";
import Button from "../../../../basicComponents/Button";
import Form from "../../../../basicComponents/Form";
import FormGroup from "../../../../basicComponents/FormGroup";
import LoginTitle from "../LoginTitle/LoginTitle";
import {Redirect} from 'react-router-dom'
import {auth} from '../../../../../actions/authentication/authenticationAction';
import {useTranslation} from "react-i18next";
import {required, maxLength15, renderInput} from '../../../../../validator/RF_Validator';

const LoginForm = (props) => {

    const {t} = useTranslation();

    const {authSuccess,handleSubmit} = props;
    if(authSuccess !== null) {localStorage.setItem('token',authSuccess);}
    return (
        <Fragment>
            { authSuccess === 1 ? <Redirect to='stages/acceuil' /> : ''}
            <Form method='POST' onSubmit={handleSubmit(props.auth)} className="bg-light mt-5 p-5 shadow-sm p-3">
                <LoginTitle/>
                <FormGroup id='element' row className="mb-0">
                    <Col>
                        <Field
                            className="border-0 shadow-sm p-3 pb-0"
                            type="text"
                            name="email"
                            id="login"
                            placeholder={t('username')}
                            component={renderInput}
                            validate={[required, maxLength15]}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row className="mt-0">
                    <Col>
                       <Field
                            className="mt-0 border-0 shadow-sm p-3"
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t('password')}
                            component={renderInput}
                            validate={[required, maxLength15]}
                        />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Button
                        type='submit'
                        className="bg-sologrey btn btn-info mt-3 offset-3 w-50 rounded-pill pt-2 pb-2 pl-3 pr-3 shadow-sm border-0">
                        {t("connection")}
                    </Button>
                </FormGroup>
            </Form>
        </Fragment>
    );
};

const mapStateToProps = ({loadAuth,authSuccess}) => {
    return{loadAuth,authSuccess}
};


export default connect(mapStateToProps, {auth})(reduxForm({
    form: 'LoginForm'
})(LoginForm));