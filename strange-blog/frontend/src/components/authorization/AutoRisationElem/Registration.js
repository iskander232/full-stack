import React, {useState} from 'react'
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from './AutorisationElem.module.css'
import {serverPath} from "../../../serverConf/server";

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
        if (localUser.login.length < 3) {
            changeError('Слишком короткое имя')
            return;
        }
        if (localUser.mail.length < 3) {
            changeError('Плохая почта')
            return;
        }
        if (localUser.password.length < 7) {
            changeError('Короткий пароль')
            return;
        }
        if (localUser.password !== localUser.repeatPassword) {
            changeError('Пароли не совпадают')
            return;
        }

        fetch(serverPath + "/registration", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {"login": localUser.login, "mail": localUser.mail, "password": localUser.password}
            )
        }).then(response => {
            if (response.ok){
                localUser.ready = true;
                changeUser(localUser);
            } else {
                changeError("Такой логин уже существует");
            }
        });
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