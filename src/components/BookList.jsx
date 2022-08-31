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
                            //two way data binding, in due passi
                            value={this.state.search} //1: qui si recupera dallo state il value e lo si inserisce nel form
                            onChange={(e) => {
                                //2: qui si manda il value del form allo state, settandolo con setState che recupera il valore dall'onchange del form
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
