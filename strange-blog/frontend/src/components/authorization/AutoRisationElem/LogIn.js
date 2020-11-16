import React, {useState} from 'react'
import styles from './AutorisationElem.module.css'
import ButtonStyles from './Button/Button.module.css'
import Input from "./Input/Input";
import Button from "./Button/Button";

function LogIn(props) {
    const {usersStore, changeUser} = props;
    const [localUser, changeLocalUser] = useState({
        "name": '',
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
        const users = usersStore.getState()
        if (users.some(
            user =>
                user.name === localUser.name &&
                user.password === localUser.password &&
                user.mail === localUser.mail)) {
            localUser.ready = true;
            changeUser(localUser)
        }else {
            changeError('Введены некорректные данные')
        }
    }

    return (
        <div className={styles.inputs}>
            <h2>Войти</h2>
            <Input placeholder="Имя пользователя" name="name" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" name="mail" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" name="password" onChange={changeHandler}/>
            <Button onClick={submitHandler} updates={ButtonStyles.margin_top}>Войти</Button>
            <h6>{errorMessage}</h6>
        </div>
    );
}

export default LogIn;