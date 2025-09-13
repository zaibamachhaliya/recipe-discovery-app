
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LuClock } from "react-icons/lu";
import { Link } from 'react-router-dom';
import fetchProduct from "../../Deta/ApiDeta";
import { setProducts } from "../../Deta/Store";
import slugify from "../../Deta/slugify";
import { FaAngleLeft } from "react-icons/fa";

function RecipeContainer() {

    const selectedcetegory = useSelector((state) => state.products.selectedCategory);
    const items = useSelector((state) => state.products.items);
    const dispatch = useDispatch();


    useEffect(() => {
        const getDeta = async () => {
            const deta = await fetchProduct(selectedcetegory);
            dispatch(setProducts(deta));
        }

        getDeta();
    }, [selectedcetegory]);



    return (
        <div className="recipeContainer">
            <section className="recipeHeroSection">
                <div>
                    <span>Discover Delicious Recipes</span>
                    <p>Find your next meal</p>
                </div>
            </section>

           
            <Link to='/categories'><button className="backcetegorizbtn"><FaAngleLeft/> Back to Categories</button></Link>

            <section className="recipesCardSection">
                <div className="recipeCardContainer">
                    {
                        items.map((item, idx) => {

                            const baseRating = (parseInt(item.idMeal) % 5) + 1;
                            const decimalPart = (Math.random() * 0.9).toFixed(1);
                            const finalRating = (baseRating - 0.5 + parseFloat(decimalPart)).toFixed(1);

                            const time = Math.floor(Math.random() * 100) + 1;


                            return <div className="card" key={idx}>
                                <img src={item.strMealThumb} />
                                <h3>{item.strMeal}</h3> 
                                <div className="timeRating">
                                    <div className="time">
                                        <span><LuClock /> <span>{time} min</span></span>
                                    </div>
                                    <div className="rating">
                                        ⭐ <span>{finalRating}</span>
                                    </div>
                                </div>

                                <Link to={`/recipes/${slugify(item.strMeal)}/${item.idMeal}`}><button>View Recipe</button></Link>
                            </div>
                        }) 
                    }
                </div>
            </section>
        </div>
    );
}

export default RecipeContainer;