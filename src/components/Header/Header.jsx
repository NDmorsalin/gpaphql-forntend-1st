import React from 'react'
import logo from '../../assets/OIP.jfif'
export const Header = () => {
  return (
    <div className='container mx-auto  px-4'>
        <div className="flex justify-between items-center">
          <div className="w-16"> <img src={logo} alt="logo" /></div>
          <h1 className="text-3xl font-bold">Project Manage </h1>
        </div>
    </div>
  )
}
