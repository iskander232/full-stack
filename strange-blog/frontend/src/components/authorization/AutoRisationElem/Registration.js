import React, {useState} from 'react'
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from './AutorisationElem.module.css'
import {serverPath} from "../../../serverConf/server";
import http from "../../../helpers/http";

function Registration(props) {
    const {changeUser} = props;
    const [localUser, changeLocalUser] = useState({
        "login": '',
        "mail": '',
        "password": '',
        "repeatPassword": '',
        "ready": false
    })

    const [errorMessage, changeError] = useState('')

    const changeHandler = event => {
        let strangeUser = {...localUser}
        strangeUser[event.target.name] = event.target.value;
        changeLocalUser(strangeUser)
    }

    const submitHandler = event => {
        if (localUser.login.length < 3 || localUser.login.length > 20) {
            changeError('Имя - от 3 до 20 символов')
            return;
        }
        if (localUser.mail.length > 100) {
            changeError('Почта - не более 100 символов')
            return;
        }
        if (localUser.password.length < 7 || localUser.password.length > 100) {
            changeError('Пароль - от 7 до 100 символов')
            return;
        }
        if (localUser.password !== localUser.repeatPassword) {
            changeError('Пароли не совпадают')
            return;
        }

        http(
            serverPath + "/registration",
            'POST',
            {"login": localUser.login, "mail": localUser.mail, "password": localUser.password},
            response => {
                http(
                    serverPath + "/login?username=" + localUser.login + "&password=" + localUser.password,
                    'POST',
                    {},
                    response => {
                        localUser.ready = true;
                        changeUser(localUser);
                    },
                    response => changeError(response.message)
                )
            },
            response => changeError(response.message)
        )
    }

    return (
        <div className={styles.inputs}>
            <h2>Зарегистрироваться</h2>
            <Input placeholder="Имя пользователя" name="login" onChange={changeHandler}/>
            <Input type="mail" placeholder="Почта" name="mail" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" name="password" onChange={changeHandler}/>
            <Input type="password" placeholder="Подтвердить пароль" name="repeatPassword" onChange={changeHandler}/>
            <Button onClick={submitHandler} flag={false}>Зарегистрироваться</Button>
            <h6>{errorMessage}</h6>
        </div>
    );
}

export default Registration;