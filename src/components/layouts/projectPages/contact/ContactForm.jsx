import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		message: "",
	})

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const clearForm = () => {
		setFormData({
			email: "",
			firstName: "",
			message: "",
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const result = await emailjs.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_EMAILJS_KEY
			)
			console.log(result.text)
			Swal.fire({
				icon: "success",
				title: "Message Sent Successfully",
			})
			e.target.reset()
			clearForm()
		} catch (error) {
			console.log(error.text)
			Swal.fire({
				icon: "error",
				title: "Ooops, something went wrong",
				text: error.text,
			})
		}
	}

	return (
		<>
			<h3>
				Please send me a message and let me know what you think ... I'm always
				looking for feedback!
			</h3>
			<Form onSubmit={handleSubmit} className="form-container">
				<div className="form-groups-container">
					<Form.Group controlId="formBasicEmail" className="form-group">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							value={formData.email}
							name="email"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter first name"
							value={formData.firstName}
							name="firstName"
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Enter your message"
							value={formData.message}
							name="message"
							onChange={handleChange}
						/>
					</Form.Group>
				</div>
				<Button variant="primary" type="submit" className="clickable-button">
					Submit
				</Button>
			<br />
			<p>No validation has been set up yet ... its on the way though!</p>
			</Form>
		</>
	)
}

export default ContactForm
