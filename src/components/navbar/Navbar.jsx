import {
	Nav,
	NavLink,
	NavLinkItem,
	NavMenu,
} from "./NavbarElements";
import ThemeToggleButton from "../themetoggle";
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";
import Transition from "../Transition";

const NavbarE = () => {
	return (
		<Container>
		<Navbar expand='md' className="navbar-color mb-2">
			<Transition direction="left" durationIn={0.9} durationOut={0.9} >
				<Navbar.Brand href="/home" className="navbar-color">Home</Navbar.Brand>
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
							contacts
						</NavLink>
						<NavLinkItem>
							<ThemeToggleButton/>			            
						</NavLinkItem>
					</NavMenu>
				</Nav>
				</Navbar.Collapse>
		</Navbar>
		</Container>
	);
};

export default NavbarE;