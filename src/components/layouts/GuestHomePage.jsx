import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const GuestHomePage = () => {
	return (
		<Container className="main_container">
			<Row>
				<Col className="header-row" id="home">
					<h1>Home</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="donate">
					<h1>Donate</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="projects">
					<h1>Projects</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="events">
					<h1>Events</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="getInvolved">
					<h1>Get Involved</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="aboutUs">
					<h1>About Us</h1>
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="contact">
					<h1>Contact</h1>
				</Col>
			</Row>
		</Container>
	)
}

export default GuestHomePage
