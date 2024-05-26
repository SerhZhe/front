import './Navbar.css';
import React, {useEffect, useState} from "react";
import {isAuth} from "../../api/AuthContext";
import {getProfile} from "../../api/api";
import {ICandidate} from "../../constants/interfaces";
import {clearStorages} from "../../api/tokenStorage";

const Navbar = () => {
    const [profile, setProfile] = useState<ICandidate>();
    useEffect(() => {
        const getProfileDate = async () => {
            if (isAuth()) {
                const data = await getProfile();
                setProfile(data)
            }
        }
        getProfileDate().then();
    }, []);
    return (
        <div className="navbar">
            <h4 onClick={() => {
                window.location.href = '/'
            }}>Список кандидатів</h4>
            {isAuth() ? profile && <div>
                <h4 onClick={() => {
                    window.location.href = '/profile'
                }}>{profile.surname} {profile.name} {profile.patronymic}</h4><h4 onClick={clearStorages}>Вихід</h4>
            </div> :
                <div><h4 onClick={() => {
                    window.location.href = '/login'
                }}>Вхід</h4>
                    <h4 onClick={() => {
                        window.location.href = '/register'
                    }}>Реєстрація</h4></div>}
        </div>
    );
}

export default Navbar;
