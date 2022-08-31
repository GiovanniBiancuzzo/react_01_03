import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        search: "",
    };

    filterBookList(text) {}

    render() {
        return (
            <Container>
                <Row wrap>
                    {this.props.books.map((book, index) => {
                        return (
                            <Col key={index}>
                                {/* key={index}    perché non posso mettere key in un componente e passarlo come props? */}
                                <SingleBook book={book} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        );
    }
}

export default BookList;
