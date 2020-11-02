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
          <Dropdown>
            <Dropdown.Toggle variant="light">Dropdown Button</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

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
