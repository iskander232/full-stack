import React from 'react'
import classnames from 'classnames'
import styles from './index.css'

export default function Button({children, updates, onClick}) {

    return (
        <button className={updates} onClick={onClick}>{children}</button>
    )
}