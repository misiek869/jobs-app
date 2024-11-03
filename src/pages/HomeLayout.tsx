import React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
	return (
		<>
			<nav>Nav</nav>
			<Outlet />
		</>
	)
}

export default HomeLayout
