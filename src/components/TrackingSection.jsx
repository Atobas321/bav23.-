//import { useEffect, useState } from 'react';
import track1 from '../assets/track1.jpg'
import track2 from '../assets/track2.jpg'
import track3 from '../assets/track3.jpg'

/**export const TrackingSection=()=>{
   const[currentImage, setCurrentImge] = useState(0)

   const images = [
    {
      id: 1,
      image: {track1},
      subtitle: "Explore the world" ,
      description: "Van track device"  
    },

     {
      id: 1,
      image: {track2},
      subtitle: "Touch the world" ,
      description: "Kids tracking device"  
    },
     {
      id: 1,
      image: {track3},
      subtitle: "Survillance the moment" ,
      description: "Human tracks"  
    }
   ];
   useEffect(()=>{
     const interval =  setInterval(()=>{
         setCurrentImge((prev)=>(prev + 1) % images.length);
      },4000)
      return()=>clearInterval(interval);
   },[images.length])
    
   return(
      <>
      <div className='relative w-full h-screen overflow-hidden'>
         {images.map((image, index) =>(
            <div key={index.id} className={`absolute inset-0 transition-all duration-1000 ease-in-out 
               ${index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}>
                  <div className='absolute inset-0 bg-cover bg-center bg-no-repeat '
                  style={{backgroundImage: `url(${image.image})`, animation: index === currentImage? 
               "kenBurns 4s ease-out" : "none"
               }}
                  ></div>
                  {/** overlay 
                  <div className='absolute inset-0 bg-black bg-opacity-40'>
                     {/**text content */
                   /**   <div className='relative z-10 h-full  flex items-center justify-center text-center text-white px-4'>
                        <div className='max-w-4xl ma-auto'>
                           <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-300
                              ${index === currentImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                              `} style={{animation: index === currentImage ? 'fadeInUp 1s ease-out 0.5s both' :
                                 'none'
                              }}>{image.title}</h1>
                              <p
                              className= {`text-xl md:text-2xl mb-8 transition-all duration-1000 delay-500
                                 ${index === currentImage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                                 `}
                                 style={{animation : index === currentImage ? 'fadeInUp 1s ease-out 0.8s both': 'none'}}
                              >
                                 {image.subtitle}
                              </p>
                              <p
                              className= {`text-lg md:text-xl opacity-90 transition-all duration-1000 delay-700
                                 ${index === currentImage ? 'opacity-90 translatre-y-0' : 'opacity-0 translate-y-8'}
                                 `}
                                 style={{ animation : index === currentImage ? 'fadeInUp 1s ease-out 1.1s both' : 'none'}}
                              >
                                 {Image.description}
                              </p>
                        </div>
                     </div>
                /**   </div>
               </div>
         ))} 

      </div>
      <style jsx>
         {`
         @keyframes KenBurns{
         0%{
         transform: scale(1)
         }
         100%{
         transform: scale(1,1)
         }
         }
         `}
      </style>
      </>
   )
} */

import React, { useState, useEffect } from 'react';

const TrackingSection = () => {
  const [currentImage, setCurrentImages] = useState(0);

  // Sample data - replace with your own images and text
  const images = [
       {
      id: 1,
      image: track1,
      subtitle: "Explore the world" ,
      description: "Van track device"  
    },

     {
      id: 2,
      image: track2,
      subtitle: "Touch the world" ,
      description: "Kids tracking device"  
    },
     {
      id: 3,
      image: track3,
      subtitle: "Survillance the moment" ,
      description: "Human tracks"  
    }
  ];

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const containerStyle = {
   position: 'relative',
    width: '80%', // Adjust this to your desired width (e.g., '600px', '90%', etc.)
    height: '60vh', // Adjust this to your desired height (e.g., '400px', '70vh', etc.)
    margin: '0 auto', // Centers the container horizontally
    marginTop: '10vh', // Adds some top margin for vertical centering
    overflow: 'hidden',
    borderRadius: '12px', // Optional: adds rounded corners
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
   
  };

  const slideStyle = (index) => ({
    position: 'absolute',
   
    margin: "auto",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: index === currentImage ? 1 : 0,
    transform: index === currentImage ? 'scale(1)' : 'scale(1.05)',
    transition: 'all 1s ease-in-out'
  });

  const backgroundStyle = (image, index) => ({
    
    
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${image.image})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    animation: index === currentImage ? 'kenBurns 4s ease-out' : 'none'
  });

  const overlayStyle = {
    position: 'absolute',
    
    top: 0,
    left: 0,
    width: '50%',
    height: '50%',
    //backgroundColor: 'rgba(0, 0, 0, 0.4)'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'navy',
    padding: '0 20px',
    fontSize:"20rem"
  };

  const textContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const titleStyle = (index) => ({
    fontSize: 'clamp(2rem, 8vw, 4rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    opacity: index === currentImage ? 1 : 0,
    transform: index === currentImage ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out',
    transitionDelay: index === currentImage ? '0.5s' : '0s'
  });

  const subtitleStyle = (index) => ({
    fontSize: 'clamp(5rem, 4vw, 1.5rem)',
    marginBottom: '2rem',
    opacity: index === currentImage ? 1 : 0,
    transform: index === currentImage ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out',
    transitionDelay: index === currentImage ? '0.8s' : '0s'
  });

  const descriptionStyle = (index) => ({
    fontSize: 'clamp(3rem, 3vw, 1.25rem)',
    opacity: index === currentImage ? 0.9 : 0,
    transform: index === currentImage ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease-out',
    transitionDelay: index === currentImage ? '1.1s' : '0s'
  });

 /** const dotsContainerStyle = {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,
    display: 'flex',
    gap: '12px'
  };

   const dotStyle = (index) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: index === currentImage ? 'white' : 'rgba(255, 255, 255, 0.5)',
    border: 'none',
    cursor: 'pointer',
    transform: index === currentImage ? 'scale(1.25)' : 'scale(1)',
    transition: 'all 0.3s ease'
  });

 /** const progressBarContainerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    zIndex: 20
  };

  const progressBarStyle = {
    height: '100%',
    backgroundColor: 'white',
    width: `${((currentImage+ 1) / images.length) * 100}%`,
    transition: 'width 0.3s ease'
  }; */

  return (
    <div style={containerStyle}>
      {images.map((image, index) => (
        <div key={image.id} style={slideStyle(index)}>
          {/* Background Image */}
          <div style={backgroundStyle(image, index)} />
          
          {/* Overlay */}
          <div style={overlayStyle} />
          
          {/* Text Content */}
          <div style={contentStyle}>
            <div style={textContainerStyle}>
              <h1 style={titleStyle(index)}>
                {image.title}
              </h1>
              
              <p style={subtitleStyle(index)}>
                {image.subtitle}
              </p>
              
              <p style={descriptionStyle(index)}>
                {image.description}
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
    {/**<div style={dotsContainerStyle}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            style={dotStyle(index)}
          />
        ))}
      </div> */}
      
     { /**{/* Progress Bar }
      <div style={progressBarContainerStyle}>
        <div style={progressBarStyle} />
      </div> */}

      {/* CSS Animations */}
      <style>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        /* Hover effects for dots */
        button:hover {
          background-color: rgba(255, 255, 255, 0.75) !important;
        }
      `}</style>
    </div>
  );
};

export default TrackingSection;
