import React from 'react'
import Input from "./Input/Input";
import Button from "./Button/Button";
import './AutorisationElem.css'
import addUser from "../../redux/usersStore/addUser";

function Registration(props) {
    const {usersStore, changeUser} = props;
    const localUser = {
        name: '',
        mail: '',
        password: '',
        repeatPassword: '',
        ready: false
    };

    const changeHandler = event => {
        localUser[event.target.name] = event.target.value;
    }

    const submitHandler = event => {
        const users = usersStore.getState();
        if (users.some(user => user.name === localUser.name)) {
            //ToDo add bad situation
        } else {
            if (localUser.password === localUser.repeatPassword) {
                addUser(usersStore);
                localUser.ready = true;
                changeUser(localUser);
            }
        }
    }

    return (
        <div className="inputs">
            <h2>Зарегистрироваться</h2>
            <Input placeholder="Имя пользователя" onChange={changeHandler}/>
            <Input type="email" placeholder="Почта" onChange={changeHandler}/>
            <Input type="password" placeholder="Пароль" onChange={changeHandler}/>
            <Input type="password" placeholder="Подтвердить пароль"/>
            <Button onClick={submitHandler} flag={false}>Зарегистрироваться</Button>
        </div>
    );
}

export default Registration;