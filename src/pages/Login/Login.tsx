import './Login.css';
import React, {useState} from 'react';
import {Button} from '../../components';
import {login} from "../../api/api";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <div className="login">
                <h2>Вхід</h2>
                <div className="login__modal-progress">
                    <span style={{backgroundColor: '#F3F2F8', marginTop: 0}}></span>
                    <span style={{width: '25%'}}></span>
                </div>

                <input placeholder="Логін" onChange={(e) => setUsername(e.target.value)} value={username}/>
                <input placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Button
                    disabled={
                        !username ||
                        !password
                    }
                    label={isLoading ? 'Реєструємо...' : 'Зареєструватися'}
                    onClick={async () => {
                        setIsLoading(true);
                        const data = await login(
                            username, password
                        );
                        if (Number(data) === 201) {
                            window.location.href = '/';
                        }
                        setIsLoading(false);
                    }}
                    btnStyle={{marginTop: '16px'}}
                />
            </div>
        </>
    );
};

export default Login;