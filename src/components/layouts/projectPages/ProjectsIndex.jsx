import React from "react"
import { Container, Row, Col, Fade } from "react-bootstrap"

import WpmOriginal from "./WpmOriginal"
import CarShow from "./CarShow"
import Contact from "./contact/Contact"
import FadeInSection from "../../services/FadeInSection"

const ProjectsIndex = () => {
	return (
		<Container className="mainContainer" id="projects">
			
			<FadeInSection>
				<Row>
					<Col className="component-container" id="wpm">
						<WpmOriginal />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="component-container" id="carShow">
						<CarShow />
					</Col>
				</Row>
			</FadeInSection>

			<FadeInSection>
				<Row>
					<Col className="component-container" id="contact">
						<Contact />
					</Col>
				</Row>
			</FadeInSection>

		</Container>
	)
}

export default ProjectsIndex
