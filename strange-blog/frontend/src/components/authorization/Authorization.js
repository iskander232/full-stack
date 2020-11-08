import React from 'react'
import LogIn from "./AutoRisationElem/LogIn";
import Registration from "./AutoRisationElem/Registration";
import './Autorization.css'

function Authorization(props) {
    const {usersStore, changeUser} = props;
    return (
        <div>
            <h1>Авторизация</h1>
            <div className="autorization">
                <LogIn usersStore={usersStore} changeUser={changeUser}/>
                <Registration usersStore={usersStore} changeUser={changeUser}/>
            </div>
        </div>
    );
}

export default Authorization;