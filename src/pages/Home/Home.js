import React from 'react'
import Navbar from '../Common/Navbar';
import Hero from './Hero';
import Footer from '../Common/Footer';
import About from '../About/About';

function Home(props) {
  return (
    <div>
      <section id="home">
        <Hero/>
        <Navbar/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="journey">

      </section>
      <section id="projects">

      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default Home

