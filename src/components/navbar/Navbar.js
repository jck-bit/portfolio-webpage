import React from "react";
import {
	Nav,
	NavLink,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import ThemeToggleButton from "../themetoggle";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";


const NavbarE = () => {
	return (
		<Navbar expand='lg'>
			<Container>
				<Navbar.Brand href="/home">Home</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<NavMenu>
			<NavBtn>
						<NavBtnLink to="/home">
							Home
						</NavBtnLink>
					</NavBtn>
						<NavLink to="/about" >
							About
						</NavLink>
						<NavLink to="/projects" activeStyle>
							projects
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