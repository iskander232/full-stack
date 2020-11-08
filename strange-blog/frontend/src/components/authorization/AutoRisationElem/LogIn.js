import React from 'react'
import './AutorisationElem.css'
import Input from "./Input/Input";
import Button from "./Button/Button";

function LogIn(props) {
    const {usersStore, changeUser} = props;
    const localUser = {
        "name": '',
        "mail": '',
        "password": '',
        "ready": false
    }

    const changeHandler = event => {
        localUser[event.target.name] = event.target.value;
    }

    const submitHandler = event => {
        const users = usersStore.getState()
        if (users.some(
            user =>
                user.name === localUser.name &&
                user.password === localUser.password &&
                user.mail === localUser.mail)) {
            localUser.ready = true;
            changeUser(localUser)
        }
    }

    return (
        <div className="inputs">
            <h2>Войти</h2>
            <Input placeholder="Имя пользователя" name="name" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" name="mail" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" name="password" onChange={changeHandler}/>
            <Button onClick={submitHandler} updates="margin_top">Войти</Button>
        </div>
    );
}

export default LogIn;