import {useState} from 'react'
import PhoneInput from 'react-phone-number-input'

const ControlledForm =() =>{
    const [inputValue, setInputValue] = useState('')

    /*const handleChange(event){
        setInputValue(event.target.value)
    } */
    return(
        <>
        <form action={""}  method=''>
            <label for = ''>Full-Name</label>
            <input type='text' className='name ' placeholder='first'/>
             <label for = ''>Phone Number</label>
            <input type='number' className='phoneNumber ' placeholder='Phone-Number'/>
             <label for = ''>Company or Organization Name</label>
            <input type='text' className='name '/>
            <PhoneInput placeholder = "Enter phone number" value= {inputValue} onChange= {setInputValue}/>
        </form>
        </>
    )
}
export default ControlledForm