import {useState} from 'react'

const ControlledForm =() =>{
    const [inputVale, setInputValue] = useState('')

    const handleChange=(e)=>{
        setInputValue(e.target.value)
    }
    return(
        <>
        <form>
       <div style={""}>
         <label>Full Name</label>
         <input type='text' value={inputVale} onChange={handleChange}/>
       </div>
        <div style={""}>
         <label>Full Name</label>
         <input type='text'/>
       </div>
        <div style={""}>
         <label>Full Name</label>
         <input type='text'/>
       </div>
        <div style={""}>
         <label>Full Name</label>
         <input type='text'/>
       </div>
        </form>
        </>
    )
}
export default ControlledForm