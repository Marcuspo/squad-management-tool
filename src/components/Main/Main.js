import { Card } from "react-bootstrap"

import "./Main.css"

function Main() {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card-main">
        <Card.Body>
          <Card.Title className="card-text">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Main
