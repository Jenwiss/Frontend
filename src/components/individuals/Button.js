import React from 'react';

const Button = (/* */ { btnType, btnText }) => {
	// const btnType = 'submit';
	// const btnText = 'Button';
	return (
		/* knappen har width: 100%; . Den bör alltså ha ett föräldra-element med en begränsad vidd (tex max-width: 430px;) */
		<button className='btn rounded-pill my-3 w-100 custom-btn' type={btnType}>
			{btnText}
		</button>
	);
};

export default Button;
