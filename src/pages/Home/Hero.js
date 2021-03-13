import React, {useState, useEffect} from 'react'
import arrow_right from '../../img/right-arrow.svg'
export default function Hero() {
  const [isHover, setIsHover] = useState(false);
  const [myName, setMyName] = useState("Sahil Debnath");
  
  const cssClasses = {
    animation: `rotate-90 translate-x-1`
  }

  useEffect(() => {
    var arrow = document.getElementById("arrow");
    var animations = cssClasses.animation.split(' ');
    if (isHover) {
      animations.forEach(x => {
        arrow.classList.add(x);
      })
    }
    else {
      animations.forEach(x => {
        arrow.classList.remove(x);
      })
    }

    fetch('https://sahil-ecommerce-backend.herokuapp.com/myname')
    .then(res => res.json())
    .then(fetchedName => setMyName(fetchedName.name));
  }, [isHover]);

  return (
    <div className={`h-screen bg-hero-pattern`}>
      <div className={`flex flex-col justify-center items-center pt-48`}>
        <div class={`subpixel-antialiased text-secondary font-serif text-5xl text-center mb-10`}>
          Hello, I'm <span className="text-accent">{myName}.</span>
          <br/>
          I code and <span className={`underline`}>I know things.</span>
        </div>
        <div id="more" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={`border rounded border-secondary border-solid p-3 hover:bg-link cursor-pointer`} dest="about" >
          <div className={`text-secondary font-gothic font-semibold`}>
            To know more
            <img id="arrow" className={`float-right pt-1 pl-3 transition duration-500 transform-gpu`} src={arrow_right} alt="Arrow Right" />
          </div>
        </div>
      </div>
    </div>
  )
}
