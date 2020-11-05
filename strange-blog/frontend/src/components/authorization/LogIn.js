import React from 'react'
import './index.css'
import Input from "./Input";
import Button from "./Button";
import usersStore from "../redux/usersStore/usersStore";

function LogIn() {
    const localUser = {
        name: '',
        mail: '',
        password: ''
    }

    const changeHandler = event => {
        localUser[event.target.name] = event.target.value;
    }

    const submitHandler = event => {
        const users = usersStore.getState()

        if (users.some(user => user.name === localUser.name && user.password === localUser.password)) {
            console.log("dsadsadsad");
        }
    }

    return (
        <div className="inputs">
            <Input placeholder="Имя пользователя" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" onChange={changeHandler}/>
            <Button onClick={submitHandler}>Войти</Button>
        </div>
    );
}

export default LogIn;