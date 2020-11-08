import React from 'react'
import LogIn from "./LogIn";
import Registration from "./Registration";
import './index.css'

function Authorization(props) {
    const {usersStore, changeUser} = props;
    return (
        <div>
            <h1>Авторизация</h1>
            <div className="autorization">
                <LogIn className="autorization-elem" usersStore={usersStore} changeUser={changeUser}/>
                <Registration className="autorization-elem" usersStore={usersStore} changeUser={changeUser}/>
            </div>
        </div>
    );
}

export default Authorization;