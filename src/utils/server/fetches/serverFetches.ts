import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

type SimpleServerError = {
    error: string;
    status: number | string;
}

type NestServerError = {
    data: {
        status: number;
        message?: string;
        errors?: {
            email?: string;
            firstName?: string;
            lastName?: string;
            password?: string;
        }
    }
}

export type ServerError = string | SimpleServerError | NestServerError | FetchBaseQueryError | SerializedError;
export const parseError = (error: ServerError) => {
    if(typeof error === 'string') return error;
    if("data" in  error) return nestServerParseError(error as NestServerError);
    if("error" in error || "status" in error) return serverError(error);

    return '';
}

const nestServerParseError = (error: NestServerError) => {
    if(error?.data?.message) {
        if(error.data.message === 'Internal server error') return 'Внутренняя ошибка сервера';
    }

    const errors = Object.values(error.data.errors || []);
    const errorsStr = errors.reduce((sumString, curString) => {
        if(curString === 'incorrectPassword') return sumString + 'Вы ввели не корректный пароль. ';
        if(curString === 'emailNotExists') return sumString + 'Такого пользователя не существует. ';
        if(curString === 'firstName should not be empty') return sumString + 'Укажите имя пользователя. ';
        if(curString === 'lastName should not be empty') return sumString + 'Укажите фамилию пользователя. ';
        if(curString === 'emailAlreadyExists') return sumString + 'Такой пользователь уже существует. ';

        return '';
    }, '');

    return errorsStr;
}

const serverError = (error: SimpleServerError) => {
    if(error.error === "TypeError: Failed to fetch") return "Не удалось получить данные с сервера";
    if(error.status === 404) return "404. Страница не найдена"

    return '';
}