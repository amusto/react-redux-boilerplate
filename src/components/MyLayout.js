import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'
import '../css/style.css'

const Layout = (props) => (
  <div className="layout">
    <Header />
    <div className="page-container">
    {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
