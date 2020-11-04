import React from 'react'
import LogIn from "./LogIn";
import Registration from "./Registration";
import './autorization.css'

function Authorization() {
    return (
        <div>
            <h1>Авторизация</h1>
            <div className="autorization">
                <LogIn className="autorization-elem"/>
                <Registration className="autorization-elem"/>
            </div>
        </div>
    );
}

export default Authorization;