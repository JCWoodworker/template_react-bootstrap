import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import AboutUs from "./AboutUs"
import Projects from "./Projects"
import Events from "./Events"
import Donate from "./Donate"
import GetInvolved from "./get_involved/GetInvolved"
import FadeInSection from "../../services/FadeInSection"

const GuestHomePage = () => {
	return (
		<Container className="main_container">
			
			<FadeInSection>
				<Row>
					<Col className="header-row" id="aboutUs">
						<AboutUs />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="header-row" id="projects">
						<Projects />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="header-row" id="events">
						<Events />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="header-row" id="donate">
						<Donate />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="header-row" id="getInvolved">
						<GetInvolved />
					</Col>
				</Row>
			</FadeInSection>

		</Container>
	)
}

export default GuestHomePage
