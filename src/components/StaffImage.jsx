import stf1 from '../assets/stf1.jpeg'
import stf2 from '../assets/stf2.jpeg'
import stf3 from '../assets/stf3.jpeg'
import stf7 from '../assets/stf7.jpeg'

function StaffImage(){
     const ContainerStyle = {
        display: "flex",
        flexDirection: "row",
        margin : "0 auto",
        width: "70rem",
        maxWidth: "400px",
        gap:"2rem",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        paddingBottom : "2rem"
       

   };
 
     const staff1 = {
        width: "15rem",
        height: "15rem"
     };
     const staff2 = {
        width :"15rem",
        height: "15rem"
     };
     const staff3 = {
        width: "15rem",
        height: "15rem"
     };
     const staff4 = {
        width: "15rem",
        height: "15rem"
     }
     const style = {
      color: "black",
      linwHeight: "1.5rem",
      padding: "0",
      fontSize: "12px",
      textAlign: "center",
      margin:"0.5rem"
     };
     const test = {
        color: "black",
        fontSize: "12px"
     }

    return(

        <>
       
         <div style={ContainerStyle}>
        <div style={staff1}>
         <img src={stf1} alt='Image1' style={staff1}/>
                <h2 style={test}>Iyanu Shoyeju</h2>

        </div>
                           
            <div style={staff2}>
               <img src={stf2} alt='Image2' style={staff2}/>
                <h2 style={test}>Esther Makinde</h2>

            </div>
                            
            <div style={staff3}>
            <img src={stf3} alt='Image3' style={staff3}/>
                <h2 style={test}>Anike Asipa</h2>
            </div>
                
            
            <div style={staff4}>
             <img src={stf7} alt='Image4' style={staff4}/>
                <h2 style={test}>Atobatele Abiodun</h2>
            </div>
               
            
         </div>
        </>
    )
}
export default StaffImage;