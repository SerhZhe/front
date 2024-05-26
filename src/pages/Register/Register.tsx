import '../Login/Login.css';
import React, {useState} from 'react';
import {Button} from '../../components';
import {register} from "../../api/api";
import {popularityArray} from "../../constants/consts";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [popularity, setPopularity] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <>
            <div className="login">
                <h1>Реєстрація кандидати</h1>
                <div className="login__modal-progress">
                    <span style={{backgroundColor: '#F3F2F8', marginTop: 0}}></span>
                    <span style={{width: '25%'}}></span>
                </div>
                <input placeholder="Логін" onChange={(e) => setUsername(e.target.value)} value={username}/>
                <input placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <input placeholder="Прізвище" onChange={(e) => setSurname(e.target.value)} value={surname}/>
                <input placeholder="Ім'я" onChange={(e) => setName(e.target.value)} value={name}/>
                <input placeholder="По батькові" onChange={(e) => setPatronymic(e.target.value)} value={patronymic}/>
                <input placeholder="Рік народження" onChange={(e) => setYear(e.target.value)} value={year}/>
                <input placeholder="Місяць народження" onChange={(e) => setMonth(e.target.value)} value={month}/>
                <input placeholder="День народження" onChange={(e) => setDay(e.target.value)} value={day}/>
                <input placeholder="Місце народження" onChange={(e) => setBirthPlace(e.target.value)}
                       value={birthPlace}/>
                <select value={popularity} onChange={(e) => {setPopularity(e.target.value);
                    setSelectedIndex(e.target.selectedIndex);
                    console.log(e.target.selectedIndex)
                }}>
                    {popularityArray.map((uniqueType, index) => (
                        <option key={index} value={uniqueType}>{uniqueType}</option>
                    ))}
                </select>
                <Button
                    disabled={
                        !name ||
                        !surname ||
                        !patronymic ||
                        !year ||
                        !month ||
                        !day ||
                        !birthPlace ||
                        !popularity ||
                        !username ||
                        !password
                    }
                    label={isLoading ? 'Реєструємо...' : 'Зареєструватися'}
                    onClick={async () => {
                        setIsLoading(true);
                        const data = await register(
                            name, surname, patronymic, year, month, day, birthPlace, selectedIndex.toString(), username, password
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

export default Register;