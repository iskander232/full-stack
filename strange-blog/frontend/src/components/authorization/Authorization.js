import React from 'react'
import LogIn from "./AutoRisationElem/LogIn";
import Registration from "./AutoRisationElem/Registration";
import styles from './Autorization.module.css'

function Authorization(props) {
    const {changeUser} = props
    return (
        <div>
            <h1>Авторизация</h1>
            <div className={styles.autorization}>
                <LogIn changeUser={changeUser}/>
                <Registration changeUser={changeUser}/>
            </div>
        </div>
    );
}

export default Authorization;