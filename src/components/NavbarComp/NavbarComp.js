import React from 'react';
import {Button, Col, InputGroup, Navbar} from "react-bootstrap";
import {useHistory} from 'react-router-dom'

function NavbarComp() {
    const history = useHistory();
    const logout = () =>{
        history.push("/");
    }

    return (
        <Navbar className={"navbar navbar-expand-lg navbar-dark bg-dark mb-3 p-3"}>
            <div className={"container-fluid"}>
                <Col>
                    <a className="navbar-brand" href="/home">Home</a>
                </Col>
                <Col className={"col-4"}>
                    <InputGroup>
                        <Button className={"btn-success"}>Add New Book</Button>
                        <input className={"form-control"} type={"search"} placeholder="Search"/>
                        <Button className={"btn-success me-3"}>Search</Button>
                        <Button className={"btn-danger"} onClick={logout}>Logout</Button>
                    </InputGroup>

                </Col>
            </div>
        </Navbar>
    );
}

export default NavbarComp;