import {useState, useEffect} from 'react';
import {Container, Row} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
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

    useEffect(() => {
        fetchAllBook()
    }, []);

    const fetchAllBook = () => {
        axios.get("https://spoilerlibrarybackend.herokuapp.com/api/books/").then(
            res => {
                setBookList(res.data)
            }
        ).catch(
            error => {
                //TODO: Error Page
            }
        )
    }

    return (
        <div>
            <NavbarComp/>
            <Container fluid>
                <Row className={"row-cols-3"}>
                    {bookList.map(book => <BookCard key={book.id} book={book}/>)}
                </Row>
            </Container>
        </div>
    );
}

export default Home;