import { useEffect, useState } from "react";
import CategoryContainer from "../../components/category_container/category_container.component";
import Container from "../../components/container/container.component";
import { fetchFromServer } from "../../utils/server/fetches/serverFetches";
import { CATEGORY_ITEM } from "../../utils/types";
import './categories.style.scss';


const Categories = () => {
    let [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        fetchFromServer('http://localhost:5000/categories', setCategories);
    }

    useEffect(fetchCategories, []);

    return (
        <div className="categories-block">
            <h1 className='categories-block_title'>Категории</h1>
            <Container itemsType={CATEGORY_ITEM} items={categories}/>
        </div>
    );
}

export default Categories;