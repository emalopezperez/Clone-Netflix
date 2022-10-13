import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img className="h-[40px] cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
      <div>
        <button className=' pr-4 cursor-pointer text-white'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar