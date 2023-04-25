import React, { useState } from 'react';

const ProductCardWide = () => {
	const [onSale, setOnSale] = useState(true);
	const [favorite, setFavorite] = useState(false);
	/////////////////Endast för utveckling, ska hämtas från API:
	const price = '22.87';
	const salePrice = '15.98';
	/////////////////

	return (
		<div className='col'>
			<div className='card product-card product-card-wide border-0 rounded-0'>
				<div className='row'>
					<div className='position-relative col-4 p-0'>
						<img
							src='https://dummyimage.com/160x170/dbe3f5/222529'
							alt=''
							className=' rounded-0'
						/>
						{onSale && (
							<div className='sale-badge position-absolute top-0 start-0'>SALE</div>
						)}
					</div>

					<div className='card-body p-0 col-7 position-relative'>
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
						<div className='position-absolute top-0 end-0 bottom-0 d-flex flex-column justify-content-between btn-bar'>
							<button
								className='btn rounded-circle p-0'
								onClick={() => setFavorite(!favorite)}
							>
								{favorite ? (
									<i className='fa-solid fa-heart'></i>
								) : (
									<i className='fa-light fa-heart text-light-color'></i>
								)}
							</button>
							<button className='btn rounded-circle shop-btn p-0'>
								<span className='fa-stack '>
									<i className='fa-light fa-bag-shopping text-light-color fa-stack-1x'></i>
									<i className='fa-light fa-plus'></i>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCardWide;
