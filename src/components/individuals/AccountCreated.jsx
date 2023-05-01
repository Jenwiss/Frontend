import React from 'react'
import Logo from "../individuals/Logo"
import Account from "../Images/Account.svg"
import Rectangle from "../Images/Rectangle.svg"

const AccountCreated = () => {

  return (
    <div>
        <div className='account-img'>
            <img src={Account} alt='Account'/> 
            <div className='rectangle-img'>
                <img src={Rectangle} alt='Rectangle'/> 
            </div>
        </div>
        <div className='account-discription'>
          <p className='account-head'>Account Created!</p>
          <p className='account-text'>Your account had beed created successfully.</p>
        </div>
    </div>
  )
}

export default AccountCreated