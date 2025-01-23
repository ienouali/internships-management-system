import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import Container from '../../../basicComponents/Container'
import Row from '../../../basicComponents/Row'
import Col from '../../../basicComponents/Col'

const ScreenAuthentication = () => {
    return (
        <Container>
            <Row>
                <Col className="col-xl-8 offset-xl-2  col-md-10 offset-md-1  col-xs-12 offset-xs-0">
                    <LoginForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default ScreenAuthentication;
