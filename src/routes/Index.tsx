import { AddProduct } from "../pages/AddProduct";
import { Cart } from "../pages/Cart";
import { DetailProduct } from "../pages/DetailProduct";
import { EditProduct } from "../pages/EditProduct";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import EditProfile from "../pages/EditProfile";
import { Signup } from "../pages/Signup";
import { Summary } from "../pages/Summary";
import { TransactionBuying } from "../pages/TransactionBuying";
import { TransactionSelling } from "../pages/TransactionSelling";
import Profile from "../pages/Profile";
import "../styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/detail-product/:id_product",
    element: <DetailProduct />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/edit-product/:id_product",
    element: <EditProduct />,
  },
  {
    path: "/profile/:id_user",
    element: <Profile />,
  },
  {
    path: "/edit-profile/:id_user",
    element: <EditProfile />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/transaction-buy/:id_user",
    element: <TransactionBuying />,
  },
  {
    path: "/transaction-sell/:id_user",
    element: <TransactionSelling />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
