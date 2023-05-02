import React, { useState } from 'react';

const ProfilePicture = (/*parentPage*/) => {
	const [imageUrl, setImageUrl] = useState(
		'https://dummyimage.com/240x240/79ed5f/000&text=profilePic'
	);

	// const parentPage = 'profile';
	const parentPage = 'editProfile';

	return (
		<div className='profile-pic-container rounded-circle position-relative'>
			<img src={imageUrl} alt='' className='rounded-circle' />
			<button className='rounded-circle position-absolute bottom-0 end-0 text-light-color'>
				{parentPage === 'profile' ? (
					<i className='fa-light fa-pen-to-square'></i>
				) : (
					<i className='fa-light fa-camera'></i>
				)}
			</button>
		</div>
	);
};

export default ProfilePicture;
