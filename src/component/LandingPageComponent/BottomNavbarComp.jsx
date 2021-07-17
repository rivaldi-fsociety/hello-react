import React from 'react';
import { Container, Navbar, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BottomNavbarComp = () => {
    return(
            <Navbar fixed="bottom" expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#">Hello ReactJS from bottom</Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default BottomNavbarComp;