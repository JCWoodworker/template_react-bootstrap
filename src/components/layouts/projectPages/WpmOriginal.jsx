import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import GithubHeaderLink from "../../icons/GithubHeaderLink"

const WpmOriginal = () => {
	return (
		<>
			<h1>
				Woodworker's Project Manager & CRM
				<GithubHeaderLink link="https://github.com/JCWoodworker/Woodworker-project-management" />{" "}
			</h1>
			<Container>
				<Row className="project-row">
					<Col>
						<h3>
							This allows woodworkers to manage their projects and also their
							customers with a build-in CRM. Twilio integration allows them to
							text ther customers as well. A local lumberyard who's customers
							use the app can login to their admin account and view data on what
							hardwoods their users need (and how much), update pricing, and
							message all users.
						</h3>
					</Col>
					<Col>
						<a href="https://woodworking-project-calc.herokuapp.com/" target="_blank">
							<img
								className="row-image"
								src="https://s3.amazonaws.com/jcwoodworker.portfolio/screenshot-wpm-original.png"
								alt="placeholder"
							/>
						</a>
						<h3>React, Node, Express PostgreSQL</h3>
						<h3>Deployed with Heroku</h3>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default WpmOriginal
