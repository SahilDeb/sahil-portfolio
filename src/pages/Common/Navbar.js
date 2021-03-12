import React from 'react'

export default function Navbar() {
  const cssClasses = {
    container: `flex flex-col justify-between bg-primary`,
    menu: `flex flex-row justify-evenly text-secondary font-sans`,
    navItem: `mx-10 my-2 hover:text-accent font-gothic font-semibold text-lg`,
    border: `border border-solid border-accent h-1 bg-accent`
  }

  return (
    <div className={cssClasses.container}>
      <div id="menu" className={cssClasses.menu}>
        <span className={cssClasses.navItem}>Home</span>
        <span className={cssClasses.navItem}>About</span>
        <span className={cssClasses.navItem}>My Journey</span>
        <span className={cssClasses.navItem}>Projects</span>
        <span className={cssClasses.navItem}>Contact</span>
      </div>
      <div className={cssClasses.border}></div>
    </div>
  )
}
