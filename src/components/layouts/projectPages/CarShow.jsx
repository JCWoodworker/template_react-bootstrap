import React from "react"
import { Container, Row, Col } from "react-bootstrap"
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
							<img
								className="row-image"
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/screenshot-car-show-app.png"
								alt="placeholder"
							/>
						</a>
						<h3>React, Node, Express, PostgreSQL</h3>
						<h3>Deployed with Heroku</h3>
					</Col>
					<Col>
						<h3>
							Made for the Michael P Stefanik Charitable Foundation, this app
							allows users to add vehicles to there profile and choose which
							one(s) to register for our annual car show. Paypal integrated.
							Admins can view data on all users and vehicles, and register a
							vehicle as "cash" if the user does not want to use a credit card.
						</h3>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default CarShow
