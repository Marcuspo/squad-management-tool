import React from "react"
import { Card, Dropdown } from "react-bootstrap"

function Main() {
  return (
    <div>
      <Card className="card-main">
        <Card.Body>
          <Card.Title className="card-title ">My teams</Card.Title>
        </Card.Body>
        <Dropdown.Divider />
      </Card>
    </div>
  )
}

export default Main
