
import { useDispatch, useSelector } from "react-redux";
import { GoPlus } from "react-icons/go";
import { addToFavorites } from "../../Deta/Store";
import { toast } from "react-toastify";
import { removeFromFavorites } from "../../Deta/Store";
import { MdDelete } from "react-icons/md";


 function CardContainer() {

    const items = useSelector((state) => state.products.items);
    const FavratItems = useSelector((state) => state.products.favorites);
    const dispatch = useDispatch();
    

    
    return <div className="CardContainer">
        <h2>Top dishes near you</h2>
        <p className="sectionSubText">
            Indulge in the finest selection of dishes, curated to bring you flavors that delight the senses.<br></br> Whether you crave a comforting classic or something new and exciting, these top picks are loved by food enthusiasts near you
        </p>

        <div className="CardflexContainer">
            {
                items.map((item, idx) => {

                    const baseRating = (parseInt(item.idMeal) % 5) + 1;
                    const decimalPart = (Math.random() * 0.9).toFixed(1);
                    const finalRating = (baseRating - 0.5 + parseFloat(decimalPart)).toFixed(1);
                    const stars = "⭐".repeat(Math.round(finalRating));

                    const ratingresult = [stars, finalRating];
                    const price = Math.floor(Math.random() * 900) + 100;

                    const checkFavrate = FavratItems.some((favrat) => favrat.idMeal == item.idMeal);



                    return <div className="heroCard" key={item.idMeal}>
                        <img src={item.strMealThumb} alt={item.strMeal} className="cardImage" />
                        {checkFavrate ? <span className="deleatIcon" onClick={() => { dispatch(removeFromFavorites(item.idMeal)); toast.info(`${item.strMeal} has been removed from your favorites.`); }}><MdDelete /></span> : <span className="plusIcon" onClick={() => { dispatch(addToFavorites({ item, price, ratingresult })); toast.success(`${item.strMeal} added to favorites  ❤️`); }}><GoPlus /></span>
                        }
                        <div className="cardContent">
                            <div>
                                <h3 className="cardTitle">{item.strMeal}</h3>
                                <p className="cardRating"><span>{ratingresult[0]} {ratingresult[1]}</span></p>
                            </div>
                            <p className="cardDescription">Food provides essential nutrients for overall health and well-being</p>
                            <p className="cardPrice">${price}</p>

                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

 export default CardContainer;