import RicepedetailContainer from "./RicepeDetailContainer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import recipeDetailApi from "../../Deta/recipedetailApi";
import { useEffect } from "react";
import { setRecipeDetail } from "../../Deta/Store";



function RecipeDetail() {


    const {id}=useParams();
    const dispatch=useDispatch();

    const recipeDetailDeta=useSelector((state)=>state.products.recepeDetail);
  


    useEffect(() => {
        const recipeDetailApiDeta = async () => {
           const deta=await recipeDetailApi(id);
           dispatch(setRecipeDetail(deta.meals[0]));
          
        } 

        recipeDetailApiDeta();
    }, []);


    return (
        <main>
            <RicepedetailContainer recipeDetailDeta={recipeDetailDeta}/>
        </main>
    );
}

export default RecipeDetail;