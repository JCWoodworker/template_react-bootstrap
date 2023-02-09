import React, { useState, useEffect } from "react"
// import { Container, Row, Col, Form } from "react-bootstrap"
import { PayPalButtons } from "@paypal/react-paypal-js"

const Donate = () => {
	const [donation, setDonation] = useState(0)

	return (
		<>
			<h1>Donate</h1>
			<PayPalButtons
				style={{ layout: "vertical", label: "donate" }}
				disabled={false}
				createOrder={(data, actions) => {
					return actions.order
						.create({
							purchase_units: [
								{
									amount: {
										value: 20,
										breakdown: {
											item_total: {
												currency_code: "USD",
												value: 20,
											},
										},
									},
									items: [
										{
											name: "donation-example",
											quantity: "1",
											unit_amount: {
												currency_code: "USD",
												value: 20,
											},
											category: "DONATION",
										},
									],
								},
							],
						})
						.then((orderId) => {
							console.log("Order ID: ", orderId)
							return orderId
						})
				}}
			/>
		</>
	)
}

export default Donate
