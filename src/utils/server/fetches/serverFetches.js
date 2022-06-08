export const fetchFromServer = (url, setFunction) => {
    fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setFunction(data))
        .catch(error => console.error(error));
}

export const parseError = (error) => {
    if(error === 'Failed to fetch')
        return 'Ошибка сервера. Попробуйте позже.'
    else 
        return 'Ошибка'
}