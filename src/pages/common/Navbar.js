import React from 'react'

export default function Navbar() {
  return (
    <div className={`flex flex-row justify-between bg-primary`}>
      <div id="menu" className={`flex flex-row justify-evenly text-secondary font-sans`}>
        <div className={`mx-10 my-2 hover:text-accent`}>
          <span>Home</span>
        </div>
        <span className={`mx-10 my-2 hover:text-accent`}>About</span>
        <span className={`mx-12 my-2 hover:text-accent`}>My Journey</span>
        <span className={`mx-12 my-2 hover:text-accent`}>Projects</span>
        <span className={`mx-12 my-2 hover:text-accent`}>Contact</span>
      </div>
      <hr></hr>
    </div>
  )
}
