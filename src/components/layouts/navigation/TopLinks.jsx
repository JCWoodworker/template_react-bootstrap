import React from "react"
import { Nav } from "react-bootstrap"

const TopLinks = () => {
	return (
		<>
			<Nav>
				<Nav.Link id="navLink" href="#aboutUs">
					About Me
				</Nav.Link>
				<Nav.Link id="navLink" href="#wpm">
					Project Manager
				</Nav.Link>
				<Nav.Link id="navLink" href="#carShow">
					Car Show
				</Nav.Link>
				<Nav.Link id="navLink" href="#contact">
					Contact
				</Nav.Link>
				<Nav.Link
					id="navLink"
					href="https://github.com/JCWoodworker/"
					target="_blank"
				>
					<i className="bi bi-github"></i>
				</Nav.Link>
			</Nav>
		</>
	)
}

export default TopLinks
