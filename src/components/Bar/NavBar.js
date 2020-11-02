import React from "react"
import { Navbar } from "react-bootstrap"

import { IconContext } from "react-icons"
import { VscAccount } from "react-icons/vsc"

import "./NavBar.css"

function NavBar() {
  return (
    <div className="navbar">
      <Navbar.Brand className="name-squad">Squad Management Tool</Navbar.Brand>
      <Navbar.Text className="justify-content-end name-fim">
        John Deo
        <IconContext.Provider
          value={{ color: "black", className: "account-icon" }}
        >
          <VscAccount />
        </IconContext.Provider>
      </Navbar.Text>
    </div>
  )
}

export default NavBar
