import React, { useState } from 'react';

const ProductCard = () => {
	const [onSale, setOnSale] = useState(true);
	const [favorite, setFavorite] = useState(false);

	/////////////////Endast för utveckling, ska hämtas från API:
	const price = '22.87';
	const salePrice = '15.98';
	/////////////////

	return (
		<div className='col'>
			<div className='card product-card border-0 rounded-0'>
				<div className='position-relative'>
					<img
						src='https://dummyimage.com/160x170/dbe3f5/222529'
						alt=''
						className='card-img-top rounded-0'
					/>
					{onSale && (
						<div className='sale-badge position-absolute top-0 start-0'>SALE</div>
					)}

					<div className='position-absolute top-0 end-0 d-flex flex-column'>
						<button
							className='btn rounded-circle'
							onClick={() => setFavorite(!favorite)}
						>
							{favorite ? (
								<i class='fa-solid fa-heart'></i>
							) : (
								<i class='fa-light fa-heart text-light-color'></i>
							)}
						</button>
						<button className='btn rounded-circle'>
							<i class='fa-light fa-bag-shopping text-light-color'></i>
						</button>
					</div>
				</div>
				{/* <i class="fa-solid fa-heart"></i> */}
				<div className='card-body p-0'>
					{/* rating */}
					<p className='card-title text-light-color'>Purple sneakers</p>{' '}
					{/*kanske inte p*/}
					<p className='card-text'>
						{onSale ? (
							<s className='text-light-color'>${price}</s>
						) : (
							<span>${price}</span>
						)}
						{onSale && <span className='sale-price'>${salePrice}</span>}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
