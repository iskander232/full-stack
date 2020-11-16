import React from 'react'
import styles from './Button.module.css'

export default function Button({children, updates, onClick}) {
    return (
        <button className={updates + " " + styles.AutorizationButton} onClick={onClick}>{children}</button>
    )
}