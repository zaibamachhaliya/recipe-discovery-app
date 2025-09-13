
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import fetchProduct from "./ApiDeta";
import {setProducts} from './Store'


const useLoaderProducts = () => {

    const dispatch = useDispatch();
    const category=useSelector((state)=>state.products.selectedCategory);

    

    useEffect(() => {

        const getDeta = async () => {
            const deta = await fetchProduct(category);
            dispatch(setProducts(deta));
        }

        getDeta();
    },[dispatch,category]);
}

export default useLoaderProducts;
