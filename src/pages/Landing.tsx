import { Link } from 'react-router-dom'
import logo from '../assets/images/jm_logo.png'
import mainImg from '../assets/images/main-photo.jpg'

const Landing = () => {
	return (
		<section className=''>
			<nav>
				<img src={logo} alt='logo' />
			</nav>
			<div className=''>
				<div className=''>
					<h1>
						Manage Your <span className=''>Jobs</span>
					</h1>
					<p>
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
