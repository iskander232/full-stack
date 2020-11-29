import React from 'react'
import LogIn from "./AutoRisationElem/LogIn";
import Registration from "./AutoRisationElem/Registration";
import styles from './Autorization.module.css'

function Authorization() {
    return (
        <div>
            <h1>Авторизация</h1>
            <div className={styles.autorization}>
                <LogIn />
                <Registration/>
            </div>
        </div>
    );
}

export default Authorization;