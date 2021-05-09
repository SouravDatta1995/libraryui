import React from 'react';
import { Row} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Book from "./Book";
import NavbarComp from "../NavbarComp/NavbarComp";

function Home(props) {

    let books = [
        {id: 1, title: "Test", author: "Test"},
        {id: 2, title: "Test", author: "Test"},
        {id: 3, title: "Test", author: "Test"},
        {id: 4, title: "Test", author: "Test"},
        {id: 5, title: "Test", author: "Test"},
    ]

    return (
        <div>
            <NavbarComp/>
            <div className={"container-fluid"}>
                <Row className={"row-cols-4"}>
                    {books.map(book => <Book title={book.title} author={book.author}/>)}
                </Row>
            </div>
        </div>
    );
}

export default Home;