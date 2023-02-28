import React from "react"
import "./assets/sass/main.scss"

import TopNavigationBar from "./components/layouts/navigation/TopNavigationBar.jsx"
import ProjectsIndex from "./components/layouts/projectPages/ProjectsIndex"

function App() {

	return (
		<>
			<TopNavigationBar />
			<ProjectsIndex />
		</>
	)
}

export default App
