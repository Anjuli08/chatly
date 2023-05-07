import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>
        Let's Chat
      </span>

      <div className='user'>
        <img src='https://images.pexels.com/photos/4919373/pexels-photo-4919373.jpeg' alt='' />
        <span>Anjuli</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
