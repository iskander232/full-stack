import React, {useState} from 'react'
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from './AutorisationElem.module.css'
import addUser from "../../redux/usersStore/addUser";

function Registration(props) {
    const {usersStore, changeUser} = props;
    const [localUser, changeLocalUser] = useState({
        "name": '',
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
        const users = usersStore.getState();
        if (users.some(user => user.name === localUser.name)) {
            changeError('Пользователь с таким ником уже есть')
            return;
        }
        if (localUser.name.length < 3) {
            changeError('Слишком короткое имя')
            return;
        }
        if (localUser.mail.length < 3) {
            changeError('Плохая почта')
            return;
        }
        if (localUser.password.length < 7){
            changeError('Короткий пароль')
            return;
        }
        if (localUser.password !== localUser.repeatPassword) {
            changeError('Пароли не совпадают')
            return;
        }

        addUser(usersStore, localUser);
        localUser.ready = true;
        changeUser(localUser);
    }

    return (
        <div className={styles.inputs}>
            <h2>Зарегистрироваться</h2>
            <Input placeholder="Имя пользователя" name="name" onChange={changeHandler}/>
            <Input type="mail" placeholder="Почта" name="mail" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" name="password" onChange={changeHandler}/>
            <Input type="password" placeholder="Подтвердить пароль" name="repeatPassword" onChange={changeHandler}/>
            <Button onClick={submitHandler} flag={false}>Зарегистрироваться</Button>
            <h6>{errorMessage}</h6>
        </div>
    );
}

export default Registration;