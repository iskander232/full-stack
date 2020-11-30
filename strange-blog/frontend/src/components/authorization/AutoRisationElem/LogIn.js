import React, {useState} from 'react'
import styles from './AutorisationElem.module.css'
import ButtonStyles from './Button/Button.module.css'
import Input from "./Input/Input";
import Button from "./Button/Button";
import {serverPath} from "../../../serverConf/server";

function LogIn(props) {
    const {changeUser} = props;
    const [localUser, changeLocalUser] = useState({
        "login": '',
        "mail": '',
        "password": '',
        "ready": false
    })

    const [errorMessage, changeError] = useState('')

    const changeHandler = event => {
        let strangeUser = {...localUser}
        strangeUser[event.target.name] = event.target.value;
        changeLocalUser(strangeUser)
    }

    const submitHandler = event => {
        // const users = usersStore.getState()
        // if (users.some(
        //     user =>
        //         user.name === localUser.name &&
        //         user.password === localUser.password &&
        //         user.mail === localUser.mail)) {
        //     localUser.ready = true;
        //     changeUser(localUser)
        // }else {
        //     changeError('Введены некорректные данные')
        // }
        fetch(serverPath + "/login", {
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
                changeError('Введены некорректные данные');
            }
        });
    }

    return (
        <div className={styles.inputs}>
            <h2>Войти</h2>
            <Input placeholder="Имя пользователя" name="login" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" name="mail" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" name="password" onChange={changeHandler}/>
            <Button onClick={submitHandler} updates={ButtonStyles.margin_top}>Войти</Button>
            <h6>{errorMessage}</h6>
        </div>
    );
}

export default LogIn;