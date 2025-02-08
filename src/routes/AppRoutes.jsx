import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "../modules/shared/components/Login";
import RegisterPage from "../modules/shared/components/RegisterPage";

// import { AuthProvider } from "../modules/shared/context/authProvider";


// App Layout Component
const AppLayout = () =>{
    return(
        <>
        {/* <Header/> */}
        <Outlet/>
        {/* <Footer/> */}
        </>
    );
};

// Define Routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        // errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Login/>,
                
            },
            {
                path: "/register",
                element: <RegisterPage/>,
                
            }
            
        ]
    }
]);

const AppRoutes = () =>{
    return(
        <>
        <RouterProvider router={router} />
        </>
    );
};

export default AppRoutes;

