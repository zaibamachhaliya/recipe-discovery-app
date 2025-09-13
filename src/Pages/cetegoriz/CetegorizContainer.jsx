import { useEffect } from "react";
import cetegorizApi from "../../Deta/CetegorizApi";
import { useDispatch, useSelector } from "react-redux";
import { setCetegoryItems } from "../../Deta/Store";
import { Link } from 'react-router-dom';
import { setCetegory } from "../../Deta/Store";



function CetegorizContainer() {


    const dispatch = useDispatch();
    const cetegorizItem = useSelector((state) => state.products.cetegoriItems);


   

    useEffect(() => {
        const cetegorizDeta = async () => {
            const deta = await cetegorizApi();
            dispatch(setCetegoryItems(deta.categories));
        }

        cetegorizDeta();
    }, []);

    

    return (
        <div className="cetegorizContainer">
            <section className="cetegorizheroSection">
                <div className="cetegorizHeroContent">
                    <h1>Explore by Categories</h1>
                    <div className="cetegorizFlexCard">
                        {
                            cetegorizItem.map((item, idx) => {
                                return <Link to='/recipes' onClick={()=>dispatch(setCetegory(item.strCategory))} key={idx}> 
                                    <div className="card">
                                        <img src={item.strCategoryThumb} />
                                        <p>{item.strCategory}</p>
                                    </div>
                                </Link>
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CetegorizContainer;