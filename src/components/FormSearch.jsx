import { Component } from "react";
import { Form } from "react-bootstrap";

class FormSearch extends Component {
    state = {
        search: "",
    };

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Cerca un libro</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Scrivi"
                        value={this.search}
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default FormSearch;
