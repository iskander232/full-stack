import React from 'react'
import Input from "./Input";
import Button from "./Button";
import './autorization.css'

function Registration(){
    return (
        <div className="inputs">
            <Input placeholder="Имя пользователя"/>
            <Input type="email" placeholder="Почта"/>
            <Input type="password" placeholder="Пароль"/>
            <Input type="password" placeholder="Подтвердить пароль"/>
            <Button>Зарегистрироваться</Button>
        </div>
    );
}

export default Registration;