import React from 'react'
import Navbar from '../Common/Navbar';
import Hero from './Hero';
import Footer from '../Common/Footer';
import About from '../About/About';
import Journey from '../Journey/Journey';
import Projects from '../Projects/Projects';

function Home(props) {
  return (
    <div>
      <section id="home">
        <Hero/>
        <Navbar/>
      </section>
      <section id="about" className={`bg-secondary`}>
        <About/>
      </section>
      <section id="journey" className={`bg-contrast`}>
        <Journey/>
      </section>
      <section id="projects" className={`bg-secondary`}>
        <Projects/>
      </section>
      <section id="contact" className={`bg-contrast`}>
        <Footer />
      </section>
    </div>
  )
}

export default Home

