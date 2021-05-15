import React, {useState} from 'react';
import {Button, Col, Container, InputGroup, Navbar} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import NewBookModal from "../Book/NewBookModal";

function NavbarComp() {
    const history = useHistory();
    const [modalState, setModalState] = useState(false);
    const logout = () => {
        history.push("/");
    }
    const openModal = () => setModalState(true)
    const closeModal = () => setModalState(false)

    return (
        <React.Fragment>
            <Navbar variant={"dark"} bg={"dark"} className={"mb-3 p-3"}>
                <Container fluid>
                    <Col>
                        <Navbar.Brand href="/home">Home</Navbar.Brand>
                    </Col>
                    <Col className={"col-4"}>
                        <InputGroup>
                            <Button variant={"success"} onClick={openModal}>Add New Book</Button>
                            <input className={"form-control"} type={"search"} placeholder="Search"/>
                            <Button variant={"success"} className={"me-3"}>Search</Button>
                            <Button variant={"danger"} onClick={logout}>Logout</Button>
                        </InputGroup>

                    </Col>
                </Container>
            </Navbar>
            <NewBookModal showBookModal={modalState} closeModal={closeModal}/>
        </React.Fragment>
    );
}

export default NavbarComp;