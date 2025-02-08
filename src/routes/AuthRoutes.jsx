import { createBrowserRouter } from "react-router-dom";
import Login from "../modules/shared/components/Login";
import RegisterPage from "../modules/shared/components/RegisterPage";
// import Error from "../modules/shared/components/Error";

const AuthRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    // errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
    // errorElement: <Error />,
  },
]);

export default AuthRoutes;