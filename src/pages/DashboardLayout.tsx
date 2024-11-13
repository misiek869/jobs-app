import React, { createContext, useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, SidebarBig, SidebarSmall } from '../components'

const defaultContextValue = {
	user: null,
	showSidebar: false,
	isDarkTheme: false,
	toggleDarkTheme: () => {},
	toggleSidebar: () => {},
	logoutUser: () => {},
	setIsDarkTheme: () => {},
}

const DashboardContext = createContext(defaultContextValue)

const DashboardLayout = () => {
	const user = { name: 'michael' }

	const [showSidebar, setShowSidebar] = useState<boolean>(false)
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

	const toggleDarkTheme = () => {
		console.log('toggle dark theme')
	}

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	const logoutUser = async () => {
		console.log('logout user')
	}

	return (
		<DashboardContext.Provider
			value={{
				user,
				showSidebar,
				isDarkTheme,
				toggleDarkTheme,
				toggleSidebar,
				logoutUser,
				setIsDarkTheme,
			}}>
			<section>
				<main className='grid grid-cols-[1fr] lg:grid-cols-[auto,1fr] '>
					<SidebarSmall />
					<SidebarBig />
					<div>
						<Navbar />
						<div className='w-[90vw] mx-auto py-8 lg:w-[90%]'>
							<Outlet />
						</div>
					</div>
				</main>
			</section>
		</DashboardContext.Provider>
	)
}

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout
