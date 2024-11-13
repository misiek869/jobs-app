import { FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useState } from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'

const LogoutContainer = () => {
	const [showLogout, setShowLogout] = useState<boolean>(false)

	const { user, logoutUser } = useDashboardContext()

	return (
		<div>
			<button
				type='button'
				className=''
				onClick={() => setShowLogout(!showLogout)}>
				a
			</button>
		</div>
	)
}

export default LogoutContainer
