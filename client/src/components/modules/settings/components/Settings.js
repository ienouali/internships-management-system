import React from "react";
import Container from "../../../basicComponents/Container";
import Row from "../../../basicComponents/Row";
import Col from "../../../basicComponents/Col";
import Button from "../../../basicComponents/Button";
import Legend from "../../../FunctionalComponents/Legend/Legend";

const Settings = (props) => {
    const style = "nv-btn-list btn btn-light text-left pl-5 text-uppercase w-100 border-0 p-4 text-secondary bg-transparent";
    const borderRight = "nv-border-right mt-5";
    return (
        <Container className='nv-main-content mb-5  mt-0' fluid={true}>
            <div className='bg-white mt-3 p-5 p-3'>
                <Legend>Gestion des paramètres</Legend>
                <Row>
                    <Col className={`${borderRight}`} md={3}>
                        <Button className={`${style}`}> utilisateurs</Button>
                        <Button className={`${style}`}> types de stage</Button>
                        <Button className={`${style}`}> départements de stage</Button>
                        <Button className={`${style}`}> formations</Button>
                        <Button className={`${style}`}> agences de sociétés</Button>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Settings;