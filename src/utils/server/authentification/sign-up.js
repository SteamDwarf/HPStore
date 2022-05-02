export function signUp(email, password, setErrorFunction, setIsFetchingFunc, successFunction) {
    setIsFetchingFunc(true);
    fetch(`http://localhost:5000/users?email=${email}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => {
            if(data.length > 0) {
                setIsFetchingFunc(false);
                setErrorFunction('Такой пользователь уже существует');
                return
            }
            
            postNewUser(email, password, setErrorFunction, setIsFetchingFunc, successFunction);
        }) 
        .catch(() => {
            setIsFetchingFunc(false);
            setErrorFunction('Ошибка сервера при получении пользователя');
        })
    
}

const postNewUser = (email, password, setErrorFunction, setIsFetchingFunc, successFunction) => {
    fetch(`http://localhost:5000/users?email=${email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({id: Date.now(), email: email, password: password})
    })
        .then(response => response.ok ? successFunction() : Promise.reject())
        .catch(error => {
            setIsFetchingFunc(false);
            setErrorFunction('Ошибка сервера при регистрации');
        })
}