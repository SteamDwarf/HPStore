export const fetchFromServer = (url, setFunction) => {
    fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setFunction(data))
        .catch(error => console.error(error));
}

export const parseError = (error) => {
    if(typeof error === 'string') return error;
    if(error?.data?.errors || error?.data?.message) return swaggerParseError(error);
}

const swaggerParseError = (data) => {
    if(data?.data?.message) {
        if(data.data.message === 'Internal server error') return 'Внутренняя ошибка сервера';
    }

    const errors = Object.values(data.data.errors);
    const errorsStr = errors.reduce((sumString, curString) => {
        if(curString === 'incorrectPassword') return sumString + 'Вы ввели не корректный пароль. ';
        if(curString === 'emailNotExists') return sumString + 'Такого пользователя не существует. ';
        if(curString === 'firstName should not be empty') return sumString + 'Укажите имя пользователя. ';
        if(curString === 'lastName should not be empty') return sumString + 'Укажите фамилию пользователя. ';
        if(curString === 'emailAlreadyExists') return sumString + 'Такой пользователь уже существует. ';
    }, '');

    return errorsStr;
}

const parseSimpleError = (error) => {
    return error;
}