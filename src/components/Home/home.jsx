import React from 'react'
import './home.css'
import Footer from './Footer/footer'
import Welcome from './Welcome/welcome'
import Navbar from './Navbar/navbar'

export default function home() {
  return (
    <div className='home-container' id='home'>
        <Navbar />
        <Welcome />
        {/* <Footer /> */}
    </div>
  )
}
