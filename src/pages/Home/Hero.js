import React from 'react'
export default function Hero() {
  return (
    <div className={`h-screen bg-hero-pattern`}>
      <div className={`flex flex-col justify-center items-center pt-48`}>
        <div class={`subpixel-antialiased text-secondary font-serif text-5xl text-center mb-10`}>
          Hello, I'm <span className="text-accent">Sahil Debnath.</span>
          <br/>
          I'm a software development engineer.
        </div>
        <div className={`border rounded border-secondary border-solid p-2 hover:bg-accent cursor-pointer`} dest="about" >
          <h3 className={`text-secondary font-semibold`}>To Know More</h3>
        </div>

      </div>
    </div>
  )
}
