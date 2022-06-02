import { NewsActions } from "./news.actions-types";

const defaultState = {
    news: [],
    error: '',
    isFetching: false
}

const newsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case NewsActions.FETCH_NEWS_START:
            return {...state, error: '', isFetching: true, news: []}
        case NewsActions.FETCH_NEWS_ERROR:
            return {...state, error: action.payload, isFetching: false}
        case NewsActions.FETCH_NEWS_SUCCESS:
            return {...state, isFetching: false, news: action.payload}
        default:
            return state;
    }
}

export default newsReducer;