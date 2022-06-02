import { NewsActions } from "./news.actions-types"

export const fetchNewsStartAction = () => ({type: NewsActions.FETCH_NEWS_START});
export const fetchNewsErrorAction = (error) => ({type: NewsActions.FETCH_NEWS_ERROR, payload: error});
export const fetchNewsSuccessAction = (news) => ({type: NewsActions.FETCH_NEWS_SUCCESS, payload: news});

export const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsStartAction());

        fetch(`http://localhost:5000/news`)
            .then(response => response.ok ? response.json() : Promise.reject())
            .then(data => dispatch(fetchNewsSuccessAction(data)))
            .catch(error => dispatch(fetchNewsErrorAction('Ошибка сервера. Попробуйте позже.')));
    }
}