import sos1 from '../assets/sos1.png'
import sos2 from '../assets/sos2.png'
import sos3 from '../assets/sos3.png'
import sos4 from '../assets/sos4.png'
import sos5 from '../assets/sos5.png'

const Social=()=>{
    const footContainer ={
        width: "auto",
        height: "4rem",
         background: "rgb(43, 132, 184)",
          flexWrap: "wrap",
         
          flexDirection: "row",
         justifyContent : "center",
         textAlign: "center",
         display: "flex",
         margin: "0 auto"
     
    };
    const pic1 = {
           width: "2rem",
           padding: "1rem"
    };
    const pic2 = {
        width: "2rem",
          padding: "1rem"
    };
    const pic3 = {
    width: "2rem",
    padding: "1rem"
    
    }; 
    const pic4 = {
        width: "2rem",
        padding: "1rem"
    };
    const pic5 = {
        width: "2rem",
        padding: "1rem"
    };

    return(
        <>
           <div className='footer-container' style={footContainer}>
            <img src={sos1} alt='telegram' style={pic1}/>
            <img src={sos2} alt='whatsapp' style={pic2}/>
            <img src={sos3} alt='instagram' style={pic3}/>
            <img src={sos4} alt='facebook' style={pic4}/>
            <img src={sos5} alt='messenger' style={pic5}/>
        </div>
        </>
    )
}
export default Social;