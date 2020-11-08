import React from 'react'
import  './index.css'

function Input({name, type, placeholder, onChange, value}) {
    return (
        <input name={name}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               value={value}/>
    )
}

export default Input;