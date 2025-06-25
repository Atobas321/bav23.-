//import {ImageColRow} from '../components/ImageColRow.js'
import '.././components/imagePropsCombine.css'


function ImagePropsCombine({title, image, description}){
    return(
        <>
        <div className='fragment'>

             <h4><button>{title} </button></h4>
              <img src= {image} alt="imagetitle"  className='col3' aria-expanded="true"  />

              <p className='description'>{description}</p> 
        </div>
        </>
    )

}
export default ImagePropsCombine; 

