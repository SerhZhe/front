import axios from 'axios';
import {clearStorages, getFromLocalStorage, saveToLocalStorage} from './tokenStorage';
import toast from 'react-hot-toast';
const url = `http://localhost:8080/`;
const access_token = getFromLocalStorage('TOKEN');
const config = {
    headers: {
        Authorization: 'Bearer ' + access_token,
    },
};
export const login = async (username:string,password:string) => {
    try {
        const response = await axios.post(url + 'login', {
            username,password
        });
        if(response.data){
            saveToLocalStorage('TOKEN',response.data)
            window.location.href='/'
        }
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getCandidats = async () => {
    try {
        const response = await axios.get(url + 'all', {});
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getProfile = async () => {
    try {
        const response = await axios.get(url + 'candidate', config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const register = async (
    name:string, surname:string, patronymic:string,year:string,month:string,day:string,birthPlace:string,popularity:string,username:string,password:string
) => {
    try {
        const response = await axios.post(
            url + 'register',
            {name, surname, patronymic,year,month,day,birthPlace,popularity,username,password},
            {},
        );
        console.log(response.data)
        if (response.data) {
            saveToLocalStorage('TOKEN', response.data.token);
            window.location.href='/'
        } else {
            toast.error(response.data.message);
        }
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteProfile = async () => {
    try {
        const response = await axios.delete(url + 'delete', config);
        clearStorages();
        return response.data;
    } catch (error) {
        console.log(error);
    }
};