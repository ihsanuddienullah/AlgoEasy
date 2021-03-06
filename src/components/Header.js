import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="#home">AlgoEasy.IO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#lesson">Catalog</Nav.Link>
                            <Nav.Link href="#contact-us">Contact</Nav.Link>
                            <NavDropdown
                                title="Languages"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    English
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Bahasa Indonesia
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Animal
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
