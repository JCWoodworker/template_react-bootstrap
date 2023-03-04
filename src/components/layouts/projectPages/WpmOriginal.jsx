import React from "react"
import { Image, Container, Row, Col } from "react-bootstrap"
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
							Woodworkers can manage projects and customers. A lumberyard can distribute the app to their customers, edit 
							hardwood pricing, view anonymous data from user projects, and send marketing emails to all users.
						</h3>
					</Col>
					<Col>
						<a href="https://woodworking-project-calc.herokuapp.com/" target="_blank">
							<Image
								fluid
								className = "screenshot"
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
