import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
	const error = useRouteError()

	return (
		<div>
			<h3>Error Page</h3>
			<Link to={'/'}>Back Home</Link>
		</div>
	)
}

export default Error
