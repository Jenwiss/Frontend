import React from 'react';

const SignUp = () => {
	return (
		<div className='container d-flex flex-column'>
			<div className='w-100 d-flex'>
				<button className='nav-btn align-middle'>
					<i className='fa-regular fa-chevron-left start-0'></i>
				</button>
				<h1 className='mx-auto page-heading my-3 width-fit-content'>Sign up</h1>
			</div>
			<div className='vr mx-auto'></div>
			<p className='mx-auto my-3 headline'>Sign Up</p>

			<form className='d-flex flex-column my-3 mx-auto form-width'>
				<input
					type='TEXT'
					placeholder='NAME'
					className='custom-input mx-auto rounded-pill my-3 p-3 w-100'
					required
				/>
				<input
					type='EMAIL'
					placeholder='EMAIL'
					className='custom-input mx-auto rounded-pill my-3 p-3 w-100'
					required
				/>
				<input
					type='password'
					placeholder='NEW PASSWORD'
					className='custom-input mx-auto rounded-pill my-3 p-3 w-100'
					required
				/>
				<input
					type='password'
					placeholder='CONFIRM PASSWORD'
					className='custom-input mx-auto rounded-pill my-3 p-3 w-100'
					required
				/>
				<button
					className='btn rounded-pill my-3 custom-btn p-3 w-100'
					type='submit'
				>
					SIGN UP
				</button>
			</form>
			<p className='text-light-color mx-auto'>
				Already have an account?{' '}
				<a className='form-link' href='#'>
					Sign in.
				</a>
			</p>
			<div className='d-flex form-width justify-content-center mx-auto socials-btn-row'>
				<button className='btn rounded-circle m-2 border-theme'>
					<i class='fa-brands fa-facebook-f'></i>
				</button>
				<button className='btn rounded-circle m-2 border-theme'>
					<i class='fa-brands fa-twitter'></i>
				</button>
				<button className='btn rounded-circle m-2 border-theme'>
					<i class='fa-brands fa-google-plus-g'></i>
				</button>
			</div>
		</div>
	);
};

export default SignUp;
