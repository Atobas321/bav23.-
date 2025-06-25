 /**export default function Navbar({children}){
    return(
        <button>{children}</button>
    )
   
} */
import { useEffect } from "react";
import { useState } from "react";
import '../components/ImageSlider.css';



const ImageSlider = ({image}) =>{

    const[currentIndex, setCurrentIndex] = useState(0)
     
    useEffect(()=>{
        // Auto- slide 
       const interval =  setInterval(() => {
            setCurrentIndex(prev =>(prev === image.length - 1 ? 0 : prev + 1))
        }, 3000);
        return ()=> clearInterval(interval)
     },[image.length])

   const goToPrev = ()=>{
        const backImage = currentIndex === 0
        const newBackImage = backImage ? image.length - 1 : currentIndex - 1
        setCurrentIndex(newBackImage)
    };
     
    const goToNext = ()=>{
        const forwardImage = currentIndex === image.length - 1
        const newForwardImage = forwardImage? 0 : currentIndex + 1
        setCurrentIndex(newForwardImage)
    }
   
    return(
            <>
            <div className="clickButton">
                <button  className="slider-button left" onClick={goToPrev}>&#60;</button>
                <button  className="slider-button right" onClick={goToNext}>&#62;</button>

            </div>
                <div className="image">
                    <div className="image-wrapper" style={{transform: `translateX(${-currentIndex *100}%)`}}>
                        {image.map((images)=>(
                            <div key={images.id} className="images">
                                <img src= {images.src} alt={images.id}/>
                            </div>                       
                        ))}
                    </div>
                </div>

            </>
    )
}

export default ImageSlider;