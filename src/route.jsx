
import Home from "./Pages/Home/Home"
import Ricepe from "./Pages/ricepe/Ricepe";
import RecipeDetail from "./Pages/ricepe/RicepeDetail";
import Cetegorys from "./Pages/cetegoriz/Cetegoris";
import Favrate from "./Pages/Faverate/Favrate";

const routes = [
    { path: '/', element: <Home /> },
    { path: '/categories', element: <Cetegorys /> },
    { path: '/recipes', element: <Ricepe /> },
    { path: '/recipes/:name/:id', element: <RecipeDetail /> },
    { path: '/favorites', element: <Favrate /> },

];
export default routes;