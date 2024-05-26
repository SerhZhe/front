
export const isAuth = () => {
    const token = localStorage.getItem('TOKEN');
    return !!token;
};