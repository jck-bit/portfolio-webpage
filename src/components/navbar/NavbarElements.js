// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	color:var(--text-color) !important;
	display: flex;
	position:'sticky';
	justify-content: space-between;
	margin-left:auto;
	align-items: center;
	
	
`;

export const NavLinkItem = styled.b`
justify-content: center;
text-decoration: none;
padding-right: 15px;
height: 100%;
cursor: pointer;

`

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	padding-right: 15px;
	height: 100%;
	cursor: pointer;
	border: none;
	margin-right: 3px;
	padding: 4px;
	border-radius: 2px;
	margin-top: 11px;
	background: #4add35;
	&.active {
	  background: rgb(255, 255, 0);
	  color: #000;
	}
	margin-top:11px;
`;

export const Bars = styled(FaBars)`
	display: none;
	
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
	@media screen and (max-width: 768px) {
	display: flex;
		margin-left:0;
		align-items: flex-start;
    margin-right: -24px;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	/* Third Nav */
	/* justify-content: flex-end;
width: 100vw; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #808080;
	padding: 10px 22px;
	color: #000000;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	/* Second Nav */
	margin-left: 24px;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #808080;
	}
	@media screen and (max-width: 768px) {
		margin-top: 0px;
	}
`;
