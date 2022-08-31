// Crea un componente SingleBook e questa volta dovrà essere un componente creato a funzione. Il componente riceve un oggetto corrispondente ad un singolo libro come prop, e visualizzerà la sua copertina e il titolo del libro.
// Usa le Card di react-bootstrap per renderizzare il libro (l’oggetto del libro può esser letto da un file .json che hai ricevuto ieri).
// Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
// Cliccare sul SingleBook dovrà fare il toggle della proprietà selected. Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente.

import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
    // state = {
    //     selected: false,
    // };

    render() {
        return (
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
