import React from 'react';
import {Button, Col, Form, InputGroup, Modal, Row} from "react-bootstrap";
import {BiMinus, BiPlus, BiReset} from "react-icons/all";

function NewBookModal(props) {
    return (
        <Modal show={props.showBookModal} onHide={props.closeModal} backdrop={"static"} centered={true} size={"lg"}>
            <Modal.Header>
                <Modal.Title className={"text-center"}>Add New Book</Modal.Title>
                <Button variant={"outline-dark"} className={"shadow-none"}><BiReset/></Button>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type={"text"} className={"mb-2"}/>
                </Form.Group>
                <Form.Label>Author Name</Form.Label>
                <Form.Control type={"text"} className={"mb-2"}/>
                <Form.Group as={Row}>
                    <Form.Group as={Col}>
                        <Form.Label>Stock</Form.Label>
                        <InputGroup>
                            <Button className={"shadow-none"} variant={"outline-danger"}><BiMinus/></Button>
                            <Form.Control className={"shadow-none"} type={"text"}/>
                            <Button className={"shadow-none"} variant={"outline-success"}><BiPlus/></Button>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                            <Button className={"shadow-none"} variant={"outline-danger"}><BiMinus/></Button>
                            <Form.Control className={"shadow-none"} type={"text"}/>
                            <Button className={"shadow-none"} variant={"outline-success"}><BiPlus/></Button>
                        </InputGroup>
                    </Form.Group>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>

                <Button variant={"secondary"} onClick={props.closeModal}>Close</Button>
                <Button type={"submit"} className={"btn-primary"}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewBookModal;