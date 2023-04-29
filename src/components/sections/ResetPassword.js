import React from 'react';
import Button from '../individuals/Button';

const ResetPassword = () => {
	return (
		<div className='container d-flex flex-column'>
			<div className='w-100 d-flex'>
				<button className='nav-btn align-middle'>
					<i className='fa-regular fa-chevron-left start-0'></i>
				</button>
				<h1 className='mx-auto page-heading my-3 width-fit-content'>
					Reset password
				</h1>
			</div>

			<p className='mx-auto text-light-color my-3'>
				Enter new password and confirm.
			</p>
			<form className='d-flex flex-column my-3 mx-auto form-width'>
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
				<Button btnType={'submit'} btnText={'CHANGE PASSWORD'} />
				{/* <button
					className='btn rounded-pill my-3 custom-btn p-3 w-100'
					type='submit'
				>
					CHANGE PASSWORD
				</button> */}
			</form>
		</div>
	);
};

export default ResetPassword;
