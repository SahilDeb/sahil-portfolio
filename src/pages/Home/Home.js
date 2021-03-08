import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Footer from '../common/Footer';

function Home(props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <h1>Home</h1>
      <Footer />
    </div>
  )
}

export default Home

