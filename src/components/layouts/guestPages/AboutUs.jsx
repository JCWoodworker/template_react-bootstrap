import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const AboutUs = () => {
	return (
		<>
			<h1>About Us</h1>
			<Container>
				<Row className="d-flex justify-content-center align-items-center text-center">
					<Col>
						<h3>
							We are a group of volunteers who are passionate about doing whatever it is we do at this particular charity!
						</h3>
					</Col>
					<Col>
						<img className="row-image" src="https://st2.depositphotos.com/1518767/7635/i/950/depositphotos_76350227-stock-photo-smiling-volunteer-looking-at-camera.jpg" alt="placeholder" />
					</Col>
				</Row>
				<Row className="d-flex justify-content-center align-items-center text-center">
					<Col>
						<img className="row-image" src="https://st2.depositphotos.com/4428871/7728/i/450/depositphotos_77287170-stock-photo-volunteering.jpg" alt="placeholder" />
					</Col>
					<Col>
						<h3>
							Check out these images of us doing some cool stuff!
						</h3>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default AboutUs
