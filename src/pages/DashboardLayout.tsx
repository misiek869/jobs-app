import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, SidebarBig, SidebarSmall } from '../components'

const DashboardLayout = () => {
	return (
		<section>
			<main className='grid grid-cols-[1fr] lg:grid-cols-[auto,1fr] '>
				<SidebarSmall />
				<SidebarBig />
				<div>
					<Navbar />
					<div className='w-[90vw] my-0 mx-auto py-8 lg:w-[90%]'>
						<Outlet />
					</div>
				</div>
			</main>
		</section>
	)
}

export default DashboardLayout
