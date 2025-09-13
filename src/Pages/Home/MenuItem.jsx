
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCetegory, setCetegoryItems } from "../../Deta/Store";
import useLoaderProducts from "../../Deta/dispatch";
import cetegorizApi from "../../Deta/CetegorizApi";

function MenuItem() {

  useLoaderProducts();
  const dispatch = useDispatch();

  const cetegorizItem = useSelector((state) => state.products.cetegoriItems);



  useEffect(() => {

    const fetchCategories = async () => {
      const data = await cetegorizApi();
      dispatch(setCetegoryItems(data.categories));
    };
    fetchCategories();

  }, [dispatch]);




  return (
    <div className="menuItem">
      {cetegorizItem.slice(0, 7).map((item, idx) => (
        <div className="item" key={idx}>
          <img
            src={item.strCategoryThumb}
            alt={item.strCategory}
            onClick={() => dispatch(setCetegory(item.strCategory))}
          />
          <span>{item.strCategory}</span>
        </div>
      ))}
    </div>
  );
}

export default MenuItem;
