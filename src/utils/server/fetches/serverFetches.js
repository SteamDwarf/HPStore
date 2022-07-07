export const parseError = (error) => {
    if(typeof error === 'string') return error;
    if(error?.data?.errors || error?.data?.message) return swaggerParseError(error);
    if(error?.error) return serverError(error);
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

const serverError = (error) => {
    if(error.error === "TypeError: Failed to fetch") return "Не удалось получить данные с сервера";
}