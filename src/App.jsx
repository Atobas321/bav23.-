import React from 'react'
import { useState } from 'react'
import './App.css'
import ImageSlider from './components/ImageSlider.jsx'
import Slider from './components/Slider.jsx'
//import {MiddleSection} from './components/MiddleSection.jsx'
import { Section } from './components/Section.jsx'
import ImagePropsCombine from './components/ImagePropsCombine.jsx'
import { ImageColRow } from './components/ImageColRow.js'
import { Update } from './components/Update.jsx'
import TrackingSection from './components/TrackingSection.jsx'
import StaffImage from './components/StaffImage.jsx'
import Social from './components/social.jsx' // Uncommented this import

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };
 
  return (
    <> 
      <div className="major-container">
        <div className='menubar'>
          <div>
            <h1>LOGOS</h1>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu} 
            aria-label='Toggle Menu' 
            aria-expanded={isMenuOpen}>
        
            <ul>   
              <li><a href='#'>HOME</a></li> 
              <li><a href='#'>FS VISA CONSULTATION</a></li>
              <li><a href='#'>FS AMAZING CARE</a></li>
              <li><a href='#'>FS REVERSED JAPA</a></li>
              <li><a href='#'>SIGN IN</a></li>
            </ul>
          </div>
        
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </div>
        </div> 
        
        <ImageSlider image={Slider}/>
      </div>

      <TrackingSection/>

      {/**<MiddleSection/> */} 

      <ul className='rowling'>
        <ImagePropsCombine {...ImageColRow[0]}/> {/* Added space before spread */}
        <ImagePropsCombine {...ImageColRow[1]}/> {/* Added space before spread */}
        <ImagePropsCombine {...ImageColRow[2]}/> {/* Added space before spread */}
      </ul>  
      
      <Section/>
      <Update/>
      <StaffImage/>
      <Social/>
    </>
  )

}

export default App