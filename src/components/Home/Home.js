import React, {useState, useEffect} from 'react';
import {Container, Row, Spinner} from "react-bootstrap"
import BookCard from "../Book/BookCard";
import NavbarComp from "../NavbarComp/NavbarComp";
import axios from "axios";

function Home(props) {

    const defBook = {
        id: 0,
        title: "",
        author: "",
        price: 0,
        count: 0
    }
    const [bookList, setBookList] = useState([defBook]);
    const [booksLoaded, setBooksLoaded] = useState(false);
    useEffect(() => {
        fetchAllBook()
    }, []);

    const fetchAllBook = () => {
        axios.get("https://spoilerlibrarybackend.herokuapp.com/api/books/").then(
            res => {
                setBookList(res.data)
                setBooksLoaded(true)
            }
        ).catch(
            error => {
                //TODO: Error Page
            }
        )
    }

    return (
        <React.Fragment>
            <NavbarComp clearCredentials={props.clearCredentials}/>
            <Container fluid className={"d-flex justify-content-center"}>
                <Spinner className={"align-content-center"} animation="grow" variant="primary" hidden={booksLoaded}/>
            </Container>
            <Container fluid>
                <Row className={"row-cols-1 row-cols-lg-3"} hidden={!booksLoaded}>
                    {bookList.map(book => <BookCard key={book.id} book={book}/>)}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Home;