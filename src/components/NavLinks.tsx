import links from '../utils/links'
import { useDashboardContext } from '../pages/DashboardLayout'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
	const { toggleSidebar } = useDashboardContext()

	return (
		<div className='pt-20 flex flex-col'>
			{links.map(link => {
				const { text, path, icon } = link
				return (
					<NavLink
						to={path}
						key={text}
						className='flex items-center py-4 capitalize text-xl tracking-wider font-semibold  text-slate-900 hover:text-orange-800 duration-200'
						onClick={toggleSidebar}
						end>
						<span className='text-4xl mr-4 grid place-items-center'>
							{icon}
						</span>
						{text}
					</NavLink>
				)
			})}
		</div>
	)
}

export default NavLinks
