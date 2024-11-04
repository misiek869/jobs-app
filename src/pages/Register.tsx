import React from 'react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

const Register = () => {
	return (
		<section className='min-h-screen grid items-center'>
			<form className='max-w-[400px] bg-neutral-100 rounded-sm shadow-md py-8 px-10'>
				<Logo />
				<h4 className='text-center mb-6'>Register</h4>
				<div className=''>
					<label
						htmlFor='name'
						className='block text-lg mb-3 capitalize tracking-wider leading-6'>
						Name
					</label>
					<input
						className='w-full py-2 px-3 rounded-sm border '
						type='text'
						required
						id='name'
						name='name'
						defaultValue={'michal'}
					/>
				</div>
				<button className='' type='submit'>
					submit
				</button>
				<p className='mt-4 text-center leading-6'>
					Are You a Member?
					<Link className='text-orange-700 tracking-wider ml-1' to={'/login'}>
						Login
					</Link>
				</p>
			</form>
		</section>
	)
}

export default Register
