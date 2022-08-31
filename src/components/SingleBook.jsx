// Crea un componente SingleBook e questa volta dovrà essere un componente creato a funzione. Il componente riceve un oggetto corrispondente ad un singolo libro come prop, e visualizzerà la sua copertina e il titolo del libro.

import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
    // state = {
    //     selected: false,
    // };

    render() {
        return (
            // key={this.props.key} non posso metterlo nemmeno in card
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                    <Card.Text>{this.props.book.category}</Card.Text>
                    <Button
                        variant="primary"
                        // onClick={this.setState({ selected: true })}
                    >
                        {this.props.price}
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
export default SingleBook;
