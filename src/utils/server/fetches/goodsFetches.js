export const fetchGoodsByCategoryName = (categoryName, setGoodsFunc) => {
    fetch(`http://localhost:5000/categories?name=${categoryName}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setGoodsFunc(data[0]?.goods))
        .catch(error => console.error(error));
}

export const fetchGoodsByCategoryId = (categoryId, setGoodsFunc) => {
    fetch(`http://localhost:5000/categories/${categoryId}/goods`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setGoodsFunc(data))
        .catch(error => console.error(error));
}

export const fetchCategory = (categoryId, setCategoryFunc) => {
    fetch(`http://localhost:5000/categories/${categoryId}`)
        .then(response => response.ok ? response.json() : Promise.reject())
        .then(data => setCategoryFunc(data))
        .catch(error => console.error(error));
};