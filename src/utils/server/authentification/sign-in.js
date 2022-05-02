export function signIn(email, password, setErrorFunction, setIsFetchingFunc, successFunction) {
    setIsFetchingFunc(true);
    fetch(`http://localhost:5000/users?email=${email}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            if(data.length <= 0) {
                setIsFetchingFunc(false);
                setErrorFunction('Данный пользователь не найден');
                return
            }

            if(data[0].password !== password) {
                setIsFetchingFunc(false);
                setErrorFunction('Вы ввели некорректный пароль');
                return
            }

            successFunction({...data[0], password: ''});
        }) 
        .catch(() => {
            setIsFetchingFunc(false);
            setErrorFunction('Ошибка сервера при получении пользователя');
        })
    
}