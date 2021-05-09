import {useState, useEffect} from 'react';
import {Row} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import BookCard from "../Book/BookCard";
import NavbarComp from "../NavbarComp/NavbarComp";
import axios from "axios";

function Home(props) {

    const defBook = {
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
        axios.get("http://localhost:8080/api/books/").then(
            res => {
                console.log(res)
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
            <div className={"container-fluid"}>
                <Row className={"row-cols-3"}>
                    {bookList.map(book => <BookCard key={book.id} book={book}/>)}
                </Row>
            </div>
        </div>
    );
}

export default Home;