import React from "react"
import { Navbar } from "react-bootstrap"

import { BsFillPersonFill } from "react-icons/bs"

import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <Navbar.Brand className="name-squad">Squad Management Tool</Navbar.Brand>
      <Navbar.Text className="justify-content-end name-fim">
        Signed in as: <a> Mark Otto</a> <BsFillPersonFill />
      </Navbar.Text>
    </div>
  )
}

export default NavBar
