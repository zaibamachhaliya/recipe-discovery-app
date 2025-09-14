
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createHashRouter, RouterProvider } from "react-router-dom";
import routes from './route.jsx';
import store from './Deta/Store.js';
import { Provider } from 'react-redux';
import { ClerkProvider } from "@clerk/clerk-react";


const router = createHashRouter([
   {
      path: "/",
      element: <App />,
      children: routes,
   }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <ClerkProvider
         publishableKey={PUBLISHABLE_KEY}
         afterSignOutUrl={`${window.location.origin}/recipe-discovery-app/#/`}
      >
         <Provider store={store}>
            <RouterProvider router={router} />
         </Provider>
      </ClerkProvider>
   </StrictMode>,
);