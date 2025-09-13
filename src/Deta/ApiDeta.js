



const fetchProduct = async (category) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await res.json();
    return data.meals;

}

export default fetchProduct;

