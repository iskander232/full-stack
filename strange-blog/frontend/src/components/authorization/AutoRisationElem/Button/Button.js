import React from 'react'
import './Button.css'

export default function Button({children, updates, onClick}) {
    return (
        <button className={updates} onClick={onClick}>{children}</button>
    )
}