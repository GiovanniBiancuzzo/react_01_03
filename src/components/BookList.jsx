import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        search: "",
    };

    filterBookList(text) {}

    render() {
        return this.props.books.map((book, index) => {
            return (
                <Container>
                    <Row wrap>
                        <Col>
                            <SingleBook book={book} key={index} />
                        </Col>
                    </Row>
                </Container>
            );
        });
    }
}

export default BookList;
