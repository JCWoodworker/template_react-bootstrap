import React from "react"
import { Nav } from "react-bootstrap"

const TopLinks = ({ loggedIn }) => {
	const userLinks = (
		<Nav>
			<Nav.Link id="navLink" href="#projects">
				Projects
			</Nav.Link>
			<Nav.Link id="navLink" href="#customers">
				Customers
			</Nav.Link>
			<Nav.Link id="navLink" href="#analytics">
				Analytics
			</Nav.Link>
			<Nav.Link id="navLink" href="#calculator">
				BF Calc
			</Nav.Link>
			<Nav.Link id="navLink" href="#settings">
				Settings
			</Nav.Link>
			<Nav.Link id="navLink" href="#priceList">
				Price List
			</Nav.Link>
			<Nav.Link id="navLink" eventKey={2} href="#signOut">
				Sign Out
			</Nav.Link>
		</Nav>
	)

	const adminLinks = (
		<Nav>
			<Nav.Link id="navLink" href="#pricing">
				Pricing
			</Nav.Link>
			<Nav.Link id="navLink" href="#messaging">
				Messaging
			</Nav.Link>
			<Nav.Link id="navLink" href="#analytics">
				Analytics
			</Nav.Link>
			<Nav.Link id="navLink" eventKey={2} href="#signOut">
				Sign Out
			</Nav.Link>
		</Nav>
	)

	const guestLinks = (
		<Nav>
			<Nav.Link id="navLink" href="#home">
				Home
			</Nav.Link>
			<Nav.Link id="navLink" href="#donate">
				Donate
			</Nav.Link>
			<Nav.Link id="navLink" href="#projects">
				Projects
			</Nav.Link>
			<Nav.Link id="navLink" href="#events">
				Events
			</Nav.Link>
			<Nav.Link id="navLink" href="#getInvolved">
				Get Involved
			</Nav.Link>
			<Nav.Link id="navLink" href="#aboutUs">
				About Us
			</Nav.Link>
			<Nav.Link id="navLink" href="#contact">
				Contact
			</Nav.Link>
			<Nav.Link id="navLink" eventKey={1} href="#signIn">
				Sign In
			</Nav.Link>
			<Nav.Link id="navLink" href="#register">
				Register
			</Nav.Link>
		</Nav>
	)

	const showLinks = () => {
		if (loggedIn.admin) {
			return adminLinks
		} else if (loggedIn.user) {
			return userLinks
		} else {
			return guestLinks
		}
	}

	return <>{showLinks()}</>
}

export default TopLinks
