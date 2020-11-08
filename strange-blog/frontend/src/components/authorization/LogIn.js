import React from 'react'
import './index.css'
import Input from "./Input";
import Button from "./Button";

function LogIn(props) {
    const {usersStore, changeUser} = props;
    const localUser = {
        name: '',
        mail: '',
        password: '',
        ready: false
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
            <Input placeholder="Имя пользователя" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" onChange={changeHandler}/>
            <Button onClick={submitHandler} updates="margin_top">Войти</Button>
        </div>
    );
}

export default LogIn;