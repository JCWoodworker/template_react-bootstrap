import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import AboutUs from "./AboutUs"
import Projects from "./Projects"
import Events from "./Events"
import Donate from "./Donate"
import GetInvolved from "./get_involved/GetInvolved" 

const GuestHomePage = () => {
	return (
		<Container className="main_container">
			<Row>
				<Col className="header-row" id="aboutUs">
					<AboutUs />
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="projects">
					<Projects />
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="events">
					<Events />
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="donate">
					<Donate />
				</Col>
			</Row>
			<Row>
				<Col className="header-row" id="getInvolved">
					<GetInvolved />
				</Col>
			</Row>
		</Container>
	)
}

export default GuestHomePage
