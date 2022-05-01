export const fetchFromServer = (url, setFunction) => {
    fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setFunction(data))
        .catch(error => console.error(error));
}


/* export const checkUniq = (url, setFunction) => {
    fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => data ? setFunction(true) : setFunction(false))
        .catch(error => console.error(error));
} */