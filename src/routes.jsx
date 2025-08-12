// Import necessary components and functions from react-router-dom.
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";


import App from "./pages/Layout";  // Import the main App component that contains the Navbar and Outlet
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";

export const router = createBrowserRouter(
    createRoutesFromElements(
   
      <Route path="/" element={<App />} errorElement={<h1>Not found!</h1>} > 

        {/* Nested Routes: Defines sub-routes within the App component. */}
        <Route index element={<Home />} /> 
        <Route path="/single/:theId" element={ <Single />} />  
        <Route path="/demo" element={<Demo />} />
      </Route>
    )
);