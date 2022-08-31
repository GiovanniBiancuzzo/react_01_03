import { Badge, Button } from "react-bootstrap";

const MyBadge = (props) => (
    <Button variant="secondary">
        Esempio: <Badge variant={props.color}>{props.text}</Badge>
        <span className="sr-only">unread messages</span>
    </Button>
);

export default MyBadge;
