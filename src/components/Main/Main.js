import React from "react"
import { Card, Button, Dropdown } from "react-bootstrap"

import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"

import { VscAdd } from "react-icons/vsc"

import "./Main.css"
import { Grid, TextField } from "@material-ui/core"

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

        <Grid container spacing={1} className="grid-item-1">
          <Grid item xs={6} container>
            <Card.Body>
              <FormControl style={{ minWidth: 300 }}>
                <InputLabel>Nome</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                >
                  <MenuItem value={1}>Nome 1</MenuItem>
                  <MenuItem value={2}>Nome 2</MenuItem>
                  <MenuItem value={3}>Nome 3</MenuItem>
                </Select>
              </FormControl>
              <Card.Text className="card-name">Barcelona</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Real Madrid</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Milan</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Liverpool</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Bayern Munich</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Lazio</Card.Text>
            </Card.Body>
          </Grid>
          <Grid container item xs={6}>
            <Card.Body>
              <FormControl style={{ minWidth: 250 }}>
                <InputLabel>Description</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                >
                  <MenuItem value={1}>Nome 1</MenuItem>
                  <MenuItem value={2}>Nome 2</MenuItem>
                  <MenuItem value={3}>Nome 3</MenuItem>
                </Select>
              </FormControl>
              <Card.Text className="card-name">Barcelona</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Real Madrid</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Milan</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Liverpool</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Bayern Munich</Card.Text>
              <Dropdown.Divider />
              <Card.Text className="card-name">Lazio</Card.Text>
            </Card.Body>
          </Grid>
        </Grid>
      </Card>
    </div>
  )
}

export default Main
