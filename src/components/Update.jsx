import '../components/Update.css'
import update1 from "../assets/test1.jpeg"
import update2 from '../assets/test2.jpeg'
import update3 from '../assets/test3.jpeg'
import update4 from '../assets/travel1.jpeg'
import travel2 from '../assets/travel2.jpeg'
import travel3 from '../assets/travel3.jpeg'
import sli1 from '../assets/sli1.jpeg'
import sli2 from '../assets/sli2.jpeg'
import sli3 from '../assets/sli3.jpeg'
import sli4 from '../assets/sli4.jpeg' 
import sli5 from '../assets/sli5.jpeg'
import { useEffect, useState } from 'react'

export const Update=()=>{
    const[miniCurrent, setMiniCurrent] = useState(0)
    const items=[
       update1, update2, update3, update4,  travel2, travel3,
         sli1,sli2, sli3, sli4, sli5]

    useEffect(()=>{
        const interval = setInterval(() => {
            setMiniCurrent(prev =>(prev + 1) % items.length);
        }, 3000);
        return()=> clearInterval(interval)

    },[items.length]);

    
    
     return(
        
          <div className="slider">
            <h1 style={{color: "black", textAlign: "center", padding: "5%"}}>Update</h1>
             <div className="slide-container" style={{transform: `translateX(-${miniCurrent * 100}%)`}}>
                  {items.map((item, index) =>(
                     <div key={index} className="slide" >
                     <img src= {item} alt= {`Image ${index}`}  />
                     </div>
                    ))}
              </div>
          </div>
           )
}



