import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import GithubHeaderLink from "../../icons/GithubHeaderLink"

const CarShow = () => {
	return (
		<>
			<h1>
				Car Show App
				<GithubHeaderLink link="https://car-show-app-preprod.herokuapp.com/" />
			</h1>
			<Container>
				<Row className="project-row">
					<Col>
						<a
							href="https://car-show-app-preprod.herokuapp.com/"
							target="_blank"
						>
							<Image
								fluid
								className = "screenshot"
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/screenshot-car-show-app.png"
								alt="placeholder"
							/>
						</a>
						<h3>React, Node, Express, PostgreSQL</h3>
						<h3>Deployed with Heroku</h3>
					</Col>
					<Col>
						<h3>
							Made for the Michael P Stefanik Charitable Foundation annual car show.  Users can register for the show and pay via Paypal.
						</h3>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default CarShow
