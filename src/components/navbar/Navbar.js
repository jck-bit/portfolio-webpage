import React from "react";
import {
	Nav,
	NavLink,
	NavMenu,
} from "./NavbarElements";
import ThemeToggleButton from "../themetoggle";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";

const NavbarE = () => {
	return (
		<Navbar expand='lg' className="navbar-color">
			<Container>
				<Navbar.Brand href="/home" className="mb-3 navbar-color">Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-color"/>
				<Navbar.Collapse id="basic-navbar-nav" className="navbar-color">
				<Nav>
					<NavMenu>
					  <NavLink to="/about"  activeStyle>
						About
					  </NavLink>
					  <NavLink to="/projects" activeStyle>
						projects
					   </NavLink>
					   <NavLink to="/contact" activeStyle></NavLink>
					   <ThemeToggleButton />			            
					</NavMenu>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarE;