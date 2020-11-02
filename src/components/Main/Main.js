import React from "react"
import { Card, Button, Dropdown } from "react-bootstrap"

import { VscAdd } from "react-icons/vsc"

import "./Main.css"

function Main() {
  return (
    <div>
      <Card className="card-main">
        <Card.Body>
          <Card.Title className="card-title ">
            My teams{" "}
            <Button className="btn btn-light float-right button-card">
              <VscAdd color="white" />
            </Button>
          </Card.Title>
        </Card.Body>
        <Dropdown.Divider />
        <Card.Body>
          <Card.Text className="card-name">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Main
