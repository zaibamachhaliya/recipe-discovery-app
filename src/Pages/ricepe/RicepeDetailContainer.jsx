import { IoIosSearch } from "react-icons/io";
import { generateDescriptionFromName } from "../../Deta/genrateDescription";
import { LuClock } from "react-icons/lu";
import { Link } from "react-router-dom";

function RicepedetailContainer({ recipeDetailDeta }) {



  const baseRating = (parseInt(recipeDetailDeta.idMeal) % 5) + 1;
  const decimalPart = (Math.random() * 0.9).toFixed(1);
  const finalRating = (baseRating - 0.5 + parseFloat(decimalPart)).toFixed(1);
  const time = Math.floor(Math.random() * 100) + 1;


  return (
    <div className="ricepedetailContiner">
      <div className="recipedetailContent"> 
        <h2><Link to='/recipes'><span style={{color:'#66bfff'}}>Recipes</span></Link> / <span>{recipeDetailDeta.strMeal}</span></h2>
        <div className="imgcontent">
          <img src={recipeDetailDeta.strMealThumb} />
          <div className="infoDetail">
            <div className="rating">
              ⭐
              <span> {finalRating}</span>
            </div>
            <div className="time">
              <LuClock /> <span>{time} min</span>
            </div>

            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {
                  Object.keys(recipeDetailDeta)
                    .filter((key) => key.includes("Ingredient") && recipeDetailDeta[key])
                    .map((key, idx) => (
                      <li key={idx}>
                        {recipeDetailDeta[key]}-{recipeDetailDeta[`strMeasure${key.replace("strIngredient", "")}`]}
                      </li>
                    ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="intrduction">
          <h2>Instructions</h2>
          <p>{recipeDetailDeta.strInstructions}</p>
        </div>

        <div>
          {recipeDetailDeta.strYoutube && (
            <div className="yotubevideo">
              <h2>Watch Video</h2>
              <iframe
                src={`https://www.youtube.com/embed/${recipeDetailDeta.strYoutube.split("v=")[1]}`}
                title={recipeDetailDeta.strMeal}
                allowFullScreen>
              </iframe>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}

export default RicepedetailContainer;