
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from './route.jsx';
import store from './Deta/Store.js';
import { Provider } from 'react-redux';
import { ClerkProvider } from "@clerk/clerk-react";

// Correct basename usage
const basename = import.meta.env.DEV ? "/" : "/recipe-discovery-app/";

const router = createBrowserRouter([
   {
      path: "/",       // ✅ Always use '/' for the main path
      element: <App />,
      children: routes,
   }
], { basename });    // ✅ Set basename here, NOT in path

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
   throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <Provider store={store}>
            <RouterProvider router={router} />
         </Provider>
      </ClerkProvider>
   </StrictMode>,
)
