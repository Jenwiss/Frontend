import React from 'react';
import PswResetImg from '../assets/images/password_reset_image.svg';
import Logo from '../components/individuals/Logo';
import Button from '../components/individuals/Button';

const ConfirmPasswordReset = () => {
	return (
		<div className='d-flex flex-column align-items-center confirm-password-reset'>
			<Logo />
			<img src={PswResetImg} className='mt-4' alt='' />
			<div className='vr mx-auto'></div>
			<h1 className='text-center'>Your password has been reset!</h1>
			<p className='text-center text-light-color'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, magnam.
			</p>
			<div className='button-container'>
				<Button btnType={'button'} btnText={'DONE'} />
			</div>
		</div>
	);
};

export default ConfirmPasswordReset;
