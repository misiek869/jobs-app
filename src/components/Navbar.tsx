import { AiOutlineMenu } from 'react-icons/ai'
import Logo from './Logo'
import { useDashboardContext } from '../pages/DashboardLayout'

const Navbar = () => {
	const { toggleSidebar } = useDashboardContext()

	return (
		<nav className='h-24 flex items-center justify-center border-b-2 lg:sticky lg:top-0 '>
			<div className='flex w-[90vw] items-center justify-between lg:w-[90%]'>
				<button
					type='button'
					className='bg-transparent border-transparent text-2xl cursor-pointer flex items-center text-orange-700'
					onClick={toggleSidebar}>
					<AiOutlineMenu />
				</button>
				<div>
					<div className='flex items-center lg:hidden'>
						<Logo />
					</div>
					<h4 className='hidden lg:block'>dashboard</h4>
				</div>
				<div className='flex items-center'>toggle/logout</div>
			</div>
		</nav>
	)
}

export default Navbar
