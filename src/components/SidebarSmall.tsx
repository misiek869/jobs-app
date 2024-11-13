import { FaTimes } from 'react-icons/fa'
import { useDashboardContext } from '../pages/DashboardLayout'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const SidebarSmall = () => {
	const { showSidebar, toggleSidebar } = useDashboardContext()

	const sidebarContainerStyles =
		'fixed inset-0 bg-white flex justify-center items-center -z-10 opacity-0 duration-300 visible'

	return (
		<aside className='lg:hidden'>
			<div
				className={
					showSidebar
						? `${sidebarContainerStyles} z-50 opacity-90 visible`
						: `${sidebarContainerStyles}`
				}>
				<div className=' w-[90vw] h-[95vh] rounded-sm py-16 px-8 relative flex items-center flex-col'>
					<button
						type='button'
						className='absolute top-3 right-3 bg-transparent text-2xl cursor-pointer text-red-800'
						onClick={toggleSidebar}>
						<FaTimes />
					</button>
					<header>
						<Logo />
					</header>
					<div className='pt-20 flex flex-col'>
						{links.map(link => {
							const { text, path, icon } = link
							return (
								<NavLink
									to={path}
									key={text}
									className='flex items-center py-4 capitalize text-xl tracking-wider font-semibold  text-slate-900 hover:text-slate-800 duration-200'
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
				</div>
			</div>
		</aside>
	)
}

export default SidebarSmall
