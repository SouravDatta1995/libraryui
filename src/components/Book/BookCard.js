import React from 'react';
import {Card, Col, Row} from "react-bootstrap";

function BookCard(props) {


    return (
        <Col className={"mb-3"}>
            <Card>
                <Card.Body>
                    <Card.Title>{props.book.title} </Card.Title>
                    <Card.Text>{props.book.author}</Card.Text>
                </Card.Body>
                <Card.Footer className={"text-center text-muted"}>
                    <Row>
                        <Col>
                            Stock : {props.book.count}
                        </Col>
                        <Col>
                            Price : {props.book.price}
                        </Col>
                    </Row>
                </Card.Footer>

            </Card>

        </Col>
    );
}

export default BookCard;