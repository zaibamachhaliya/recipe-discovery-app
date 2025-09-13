


const cetegorizApi = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    return data;
};

export default cetegorizApi;
