import { Link } from 'react-router-dom'
import logo from '../assets/images/jm_logo.png'
import mainImg from '../assets/images/main-photo.jpg'

const Landing = () => {
	return (
		<section>
			<nav className='w-[90vw] max-w-6xl bg-red-200 mx-0 my-auto h-24 flex items-center'>
				<img src={logo} alt='logo' />
			</nav>
			<div className='landing-page grid items-center mt-[-3rem]'>
				<div className=''>
					<h1 className='font-bold mb-6 text-gray-900'>
						Manage Your <span className='text-orange-700'>Jobs</span>
					</h1>
					<p className='leading-8 text-gray-800 mb-6 max-w-[35em]'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Exercitationem ab nulla maxime reiciendis, magnam delectus officiis
						temporibus rem ipsum nemo? Asperiores unde obcaecati animi mollitia
						esse! Officia beatae a quasi.
					</p>
					<Link className='' to={'/register'}>
						Register
					</Link>
					<Link className='' to={'/Login'}>
						Login / Demo
					</Link>
				</div>
				<img src={mainImg} alt='image with charts' />
			</div>
		</section>
	)
}

export default Landing
