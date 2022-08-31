// Crea un componente BookList. Questo componente riceverà dalle prop una lista di libri da visualizzare utilizzando il componente SingleBook.

import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        search: "",
    };

    filterBookList(text) {}

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Cerca un libro..."
                            value={this.state.search}
                            onChange={(e) => {
                                this.setState({
                                    search: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                </Form>
                <Row wrap>
                    {this.props.books.map((book, index) => {
                        return (
                            <Col key={index}>
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
