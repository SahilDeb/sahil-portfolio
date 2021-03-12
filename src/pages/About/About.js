import React from 'react'

export default function About() {
  return (
    <div className={`content-between justify-center items-center my-10 px-10 h-auto`}>
      <div className={`flex flex-col mb-20`}>
        <div className={`text-4xl font-sans font-bold m-auto`}>ABOUT</div>
        <div className={`border-primary bg-primary m-auto mt-1 h-1 w-14`}></div>
      </div>
      <div className={`flex flex-col md:flex-row`}>
        <div className={`h-auto w-screen p-5 text-center border border-primary`}>
          <div>IMAGE</div>
          <div>Who's this guy?</div>
          <div>
            I'm a Software Engineer working for <a className={`text-link`} href="https://mitratech.com/" target="_blank">Mitratech </a>
            in Bangalore, Karnataka.<br />
            I have serious passion for coding, building applications and creating scalable solutions.
            Also, I build projects just to tickle my brain and learn something new.<br/>
            <span className={`text-link`}>Click here to know more.</span>
          </div>
        </div>
        <div className={`h-auto w-screen py-5 text-center border border-primary`}>
          SKILLS
        </div>
      </div>
    </div>
  )
}
