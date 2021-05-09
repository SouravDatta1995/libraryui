import React from 'react';
import {Card, Col} from "react-bootstrap";

function Book(props) {

    return (
        <Col className={"mb-3"}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.title} </Card.Title>
                    <Card.Text>{props.author}</Card.Text>
                </Card.Body>
            </Card>

        </Col>
    );
}

export default Book;