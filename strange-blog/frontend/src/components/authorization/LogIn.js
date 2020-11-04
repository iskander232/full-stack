import React from 'react'
import './autorization.css'
import Input from "./Input";
import Button from "./Button";

function LogIn() {
    return (
        <div className="inputs">
            <Input placeholder="Имя пользователя"/>
            <Input type="email" placeholder="Почта"/>
            <Input type="password" placeholder="Пароль"/>
            <Button>Войти</Button>
        </div>
    );
}

export default LogIn;