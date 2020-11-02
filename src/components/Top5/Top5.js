import { Grid } from "@material-ui/core"
import React from "react"
import { Card, Dropdown, ListGroup } from "react-bootstrap"

import "./Top5.css"

function Main() {
  return (
    <div>
      <Card className="card-main-top5">
        <Card.Body>
          <Card.Title className="card-title">Top 5</Card.Title>
        </Card.Body>
        <Dropdown.Divider />
        <Grid container spacing={1}>
          <Grid item xs container>
            <Card.Text className="name-card-top5">Highest avg age</Card.Text>
          </Grid>
          <Grid item xs container>
            <Card.Text className="name-card-top5">Lowest avg age</Card.Text>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs container>
            <Card.Body>
              <Grid container spacing={1}>
                <ListGroup variant="flush" className="lista-left-group rounded">
                  <ListGroup.Item>Inter Milan</ListGroup.Item>
                  <ListGroup.Item>APOEL Nicosia</ListGroup.Item>
                  <ListGroup.Item>AC Milan</ListGroup.Item>
                  <ListGroup.Item>Besiktas JK</ListGroup.Item>
                  <ListGroup.Item>Olympiacos</ListGroup.Item>
                </ListGroup>
              </Grid>
            </Card.Body>
            <Card.Body>
              <ListGroup variant="flush" className="lista-left-group rounded">
                <ListGroup.Item>Zalgiris Vilnius</ListGroup.Item>
                <ListGroup.Item>Arsenal FC</ListGroup.Item>
                <ListGroup.Item>Ajax Amsterdam</ListGroup.Item>
                <ListGroup.Item>FC Nantes</ListGroup.Item>
                <ListGroup.Item>CSKA Moscow</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default Main
