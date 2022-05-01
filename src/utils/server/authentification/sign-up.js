export async function signUp(email, password, setStatusFunction) {
    fetch(`http://localhost:5000/users?email=${email}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => data.length > 0 ? setStatusFunction('Такой пользователь уже существует') : postNewUser(email, password, setStatusFunction)) 
        .catch(error => setStatusFunction('Ошибка сервера при получении пользователя'))
    
}

const postNewUser = (email, password, setStatusFunction) => {
    fetch(`http://localhost:5000/users?email=${email}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({id: Date.now(), email: email, password: password})
    })
        .then(response => response.ok ? setStatusFunction('Пользователь успешно зарегистрирован') : Promise.reject())
        .catch(error => setStatusFunction('Ошибка сервера при регистрации'))
}