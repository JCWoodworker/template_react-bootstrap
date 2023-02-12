import React from "react"

import { Container, Row, Col } from "react-bootstrap"

const Form = () => {
	return (
		<Container>
			<Row>
				<Col>
					<p>
						We are always looking for new volunteers to join our team. If you
						are interested in joining us, please fill out the form below and we
						will get back to you as soon as possible.
					</p>
					<form className="form-control get-involved-form">
						<div>
							<label>Name:</label>
							<input type="text" name="name" />
						</div>
						<div>
							<label>Email:</label>
							<input type="text" name="email" />
						</div>
						<div>
							<label>Cell (no dashes):</label>
							<input type="tel" pattern="[0-9]{10}" name="phone" placeholder="123-456-7890" />
						</div>
						<div>
							<label></label>
						<input className="clickable-button" type="submit" value="Submit" />
						</div>
					</form>
				</Col>
			</Row>
		</Container>
	)
}

export default Form
