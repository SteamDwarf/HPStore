import { createSelector } from "reselect";

export const getNewsStore = (state) => state.news;

export const getNews = createSelector(
    [getNewsStore],
    (newsStore) => newsStore.news
);

export const getNewsError = createSelector(
    [getNewsStore],
    (newsStore) => newsStore.error
);

export const getNewsFetchingState = createSelector(
    [getNewsStore],
    (newsStore) => newsStore.isFetching
);