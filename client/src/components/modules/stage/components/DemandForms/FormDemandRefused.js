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
import {loadDemand} from "../../../../../actions/demand/getDemandAction";
import {refuseDemand} from '../../../../../actions/demand/refuseDemandAction';
import { required, renderInput } from '../../../../../validator/RF_Validator';
import Container from "../../../../basicComponents/Container";
import {useTranslation} from "react-i18next";



const FormRefusedDemand = (props) => {

    const {handleSubmit,loadDemand,demand} = props;

    useEffect(() => {
        const pathName = window.location.pathname.split('/');
        const Demand_ID = pathName[3];
        loadDemand(Demand_ID);
    }, [loadDemand]);
    const {t} = useTranslation();
    return (
        <Container fluid className='nv-main-content mt-5'>
            <Form onSubmit={handleSubmit((data) => props.refuseDemand(data,() => props.history.push('/stages/refusés') ))} className="mt-3 p-5 p-3 mt-5 ">
                <Legend desc={t('fillRefuseFieldOfComment')}>
                    {t('refuseDemandOf')} :  <strong className='text-uppercase'> {demand ?` ${demand.nom} ${demand.prenom}` : ''} </strong>
                </Legend>
                <Row>
                    <Col md={{ size: 12}}>
                        <FormGroup className="mb-1">
                            <Label id='element' for="commentaire" sm={10}>{t('comment')}</Label>
                            <Field
                                autoComplete="off"
                                type="textarea"
                                name="commentaire"
                                id="commentaire"
                                placeholder={t('comment')}
                               component={renderInput}
                               validate={[required]}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Col>
                    <FormGroup check row>
                        <Button
                            type='submit'
                            className="nv-error-bg">
                            <i className="fas fa-exclamation-triangle"/>&nbsp; &nbsp;{t('btnRefuseDemand')}
                        </Button>
                    </FormGroup>
                </Col>
            </Form>
        </Container>
    );
};

const mapStateToProps = ({demand,loadRefuseDemand}) => {
    return ({ demand, loadRefuseDemand, initialValues:{...demand}  })
};

export default connect(mapStateToProps, {loadDemand, refuseDemand})(reduxForm({
    enableReinitialize: true,
    form: 'FormRefusedDemand'
})(FormRefusedDemand));
