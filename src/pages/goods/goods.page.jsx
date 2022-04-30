import CategoryContainer from "../../components/category_container/category_container.component";
import NewsContainer from "../../components/news_container/news_container.component";

const Goods = () => {
    const categories = [
        {
            "id": 0,
            "title": "Одежда",
            "imageSrc": "https://sc01.alicdn.com/kf/HTB1jckTOXXXXXXYXFXXq6xXFXXXC/Wholesale-Hot-Sale-Harry-Potter-Costume-For.jpg"
        },
        {
            "id": 1,
            "title": "Товары из магазина 'Сладкое королевство'",
            "imageSrc": "https://pbs.twimg.com/media/D4wITbeX4AAMF-2.jpg"
        },
        {
            "id": 2,
            "title": "Всевозможные волшебные вредилки",
            "imageSrc": "https://i.pinimg.com/originals/66/c1/71/66c171c1e22851f9a4be695518cad938.jpg"
        }
    ]

    return (
        <CategoryContainer categories={categories}/>
    );
}

export default Goods;