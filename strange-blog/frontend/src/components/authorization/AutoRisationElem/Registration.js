import React from 'react'
import Input from "./Input/Input";
import Button from "./Button/Button";
import './AutorisationElem.css'
import addUser from "../../redux/usersStore/addUser";

function Registration(props) {
    const {usersStore, changeUser} = props;
    let localUser = {
        "name": '',
        "mail": '',
        "password": '',
        "repeatPassword": '',
        "ready": false
    };

    const changeHandler = event => {
        const name = event.target.name;
        localUser[name] = event.target.value;
    }

    const submitHandler = event => {
        const users = usersStore.getState();
        if (users.some(user => user.name === localUser.name)) {
            //ToDo add bad situation
        } else {
            if (localUser.password === localUser.repeatPassword) {
                addUser(usersStore);
                localUser.ready = true;
                console.log(localUser)
                changeUser(localUser);
            }
        }
    }

    return (
        <div className="inputs">
            <h2>Зарегистрироваться</h2>
            <Input placeholder="Имя пользователя" name="name" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" name="mail" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" name="password" onChange={changeHandler}/>
            <Input type="password" placeholder="Подтвердить пароль" name="repeatPassword" onChange={changeHandler}/>
            <Button onClick={submitHandler} flag={false}>Зарегистрироваться</Button>
        </div>
    );
}

export default Registration;