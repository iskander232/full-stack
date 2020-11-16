import React from 'react'
import styles from './Input.module.css'

function Input({name, type, placeholder, onChange, value}) {
    return (
        <input className={styles.AutorizationInput}
               name={name}
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               value={value}/>
    )
}

export default Input;