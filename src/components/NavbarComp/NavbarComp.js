import React, {useState} from 'react';
import {Button, FormControl, InputGroup, Nav, Navbar} from "react-bootstrap";
import NewBookModal from "../Book/NewBookModal";
import {BiSearch} from "react-icons/all";

function NavbarComp(props) {
    const [modalState, setModalState] = useState(false);
    const logout = () => {
        props.clearCredentials()
    }
    const openModal = () => setModalState(true)
    const closeModal = () => setModalState(false)

    return (
        <React.Fragment>
            <Navbar variant={"dark"} bg={"dark"} className={"mb-3 p-3"} expand={"lg"} sticky={"top"}>
                <Navbar.Toggle aria-controls={"basic-navbar-nav"} className={"shadow-none"}/>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Collapse id={"basic-navbar-nav"} className={"justify-content-end mt-2 mt-lg-0"}>
                    <Nav>
                        <Nav.Item className={" me-lg-2 mb-2 mb-lg-0"}>
                            <Button variant={"success"} onClick={openModal}
                                    className={"container-fluid"}>Add New Book</Button>
                        </Nav.Item>
                        <Nav.Item className={"mb-2 mb-lg-0"}>
                            <InputGroup>
                            <FormControl type={"search"}
                                         placeholder="Search"/>
                            <Button variant={"success"} className={"w-25"}><BiSearch/></Button>
                            </InputGroup>
                        </Nav.Item>
                        <Nav.Item className={"ms-lg-2 mb-2 mb-lg-0"}>
                            <Button variant={"danger"}
                                    className={"container-fluid"}
                                    onClick={logout}>Logout</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <NewBookModal showBookModal={modalState} closeModal={closeModal}/>
        </React.Fragment>
    );
}

export default NavbarComp;