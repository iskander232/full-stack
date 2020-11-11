import React from 'react'
import './Input.css'

function Input({name, type, placeholder, onChange, value}) {
    return (
        <input className="AutorizationInput"
               name={name}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               value={value}/>
    )
}

export default Input;