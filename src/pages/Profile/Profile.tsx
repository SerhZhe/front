import './Profile.css';
import React, {useEffect, useState} from "react";
import {isAuth} from "../../api/AuthContext";
import {deleteProfile, getProfile} from "../../api/api";
import {ICandidate} from "../../constants/interfaces";
import {popularityIndex} from "../../constants/consts";
import {Button} from "../../components";

const Profile = () => {
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
        <div className="profile">
            <h2>Моя заявка</h2>
            {profile&& <>
                <h4>ПІБ: {profile.surname} {profile.name} {profile.patronymic}</h4>
                <h4>Індекс популярності: {popularityIndex[Number(profile.popularity)]}</h4>
                <h4>Місце народження: {profile.birthPlace}</h4>
                <h4>Дата народження: {profile.day}.{profile.month}.{profile.year}</h4>
            </>}
            <Button label='Видалити заяву' onClick={deleteProfile}/>
        </div>
    );
}

export default Profile;
