import React from "react";
import {
	Nav,
	NavLink,
	NavMenu,
} from "./NavbarElements";
import ThemeToggleButton from "../themetoggle";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import Transition from "../Transition";

const NavbarE = ({props}) => {
	return (
		<Navbar expand='md' className="navbar-color mb-2">
			<Container>
			<Transition direction="left" durationIn={0.9} durationOut={0.9} >
				<Navbar.Brand href="/home" className=" navbar-color">Home</Navbar.Brand>
			</Transition>
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
					   <NavLink to="/contact" activeStyle>
						contact
					   </NavLink>
					   <ThemeToggleButton />			            
					</NavMenu>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarE;