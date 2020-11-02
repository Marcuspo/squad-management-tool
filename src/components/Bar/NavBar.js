import React from "react"
import { Navbar } from "react-bootstrap"

import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <Navbar.Brand className="name-squad">Squad Management Tool</Navbar.Brand>
      <Navbar.Text className="justify-content-end">
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </div>
  )
}

export default NavBar
