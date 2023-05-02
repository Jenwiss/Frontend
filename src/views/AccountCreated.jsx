import React from 'react'
import Account from "../assets/images/Account.svg"
import Rectangle from "../assets/images/Rectangle.svg"

const AccountCreated = () => {

  return (
    <div>
        <div className='account-img'>
            <img src={Account} alt='Account'/> 
            <div className='rectangle-img'>
                <img src={Rectangle} alt='Rectangle'/> 
            </div>
            <p className='account-head'>Account Created!</p>
            <p>test</p>
        </div>
    </div>
  )
}

export default AccountCreated