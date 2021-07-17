import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { Container, Navbar, Spinner, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNavbarComp = () => {
    return(
        <div>
            <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#">Hello ReactJS</Navbar.Brand>
                </Container>
                <Spinner animation="border" variant="primary" />
            </Navbar>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopNavbarComp;