import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'

const btnStyle =
	'cursor-pointer text-white bg-orange-700 border-none rounded-sm tracking-wider py-3 px-4 shadow-sm duration-300 capitalize inline-block hover:bg-orange-800 hover:shadow-lg'

const LogoutContainer = () => {
	const [showLogout, setShowLogout] = useState<boolean>(false)

	const { user, logoutUser } = useDashboardContext()

	return (
		<div className='relative'>
			<button
				type='button'
				className={`${btnStyle} flex items-center justify-center gap-x-2`}
				onClick={() => setShowLogout(!showLogout)}>
				<FaUserCircle />
				{user?.name}
				<FaCaretDown />
			</button>
			<div
				className={`absolute top-[45px] left-0 w-full text-center  bg-orange-700 ${
					showLogout ? 'duration-200' : 'hidden'
				}`}>
				<button
					type='button'
					className='p-2 bg-transparent text-white w-full h-full cursor-pointer capitalize'
					onClick={logoutUser}>
					logout
				</button>
			</div>
		</div>
	)
}

export default LogoutContainer
