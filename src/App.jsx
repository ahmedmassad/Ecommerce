import { createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout.jsx"
import Brands from "./components/brands/Brands.jsx";
import Categories from './components/categories/Categories.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Notfund from "./components/notfund/Notfund.jsx";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./Context/AuthContext.jsx";
import Protectedroute from "./components/protectedRoute/Protectedroute.jsx";
import Products from "./components/Products/Products.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import ProdactDiteles from './components/pordactditeles/ProdactDiteles.jsx';
import CartcontextProvider from "./Context/Cartcontext";
import Home from "./components/Homepro/Home.jsx";
import Paymant from "./components/payment/Paymant.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Forgetpaasword from "./components/forgetpaasword/Forgetpaasword.jsx";
import WishListContext from "./Context/WishListContext.jsx";
import Wishlistt from "./components/Wishlist/Wishlist.jsx";
import ResetCode from "./components/resetCode/ResetCode.jsx";
import ResetPassword from './components/resetPassword/ResetPassword';

function App() {
const x = new  QueryClient()
const myrouter =  createHashRouter([
  {path:"/", element:<Layout/> , children :[
    {path:"/", element: <Protectedroute>
    <Home/>
    </Protectedroute>},
    {path:"/Home", element:<Protectedroute>
      <Home/>
    </Protectedroute>},
    {path:"/cart", element:<Protectedroute>
      <Cart />
    </Protectedroute>},
    {path:"/Wishlistt", element:<Protectedroute>
      <Wishlistt />
    </Protectedroute>},
    {path:"/Paymant", element:<Protectedroute>
      <Paymant />
    </Protectedroute>},
    {path:"/Products", element: <Protectedroute>
      <Products />
    </Protectedroute>},
    {path:"/Categories", element: <Protectedroute>
      <Categories />
    </Protectedroute>},
    {path:"/Brands", element: <Protectedroute>
      <Brands />
    </Protectedroute>},
    {path:"/ProdactDiteles/:id", element: <Protectedroute>
      <ProdactDiteles />
    </Protectedroute>},
    {path:"/Login", element: <Login />},
    {path:"/Forgetpaasword", element: <Forgetpaasword />},
    {path:"/resetCode", element: <ResetCode />},
    {path:"/resetPassword", element: <ResetPassword/>},
    {path:"/Register", element: <Register/>},
    {path:"*", element: <Notfund />},
  ]}
])
  return (
  <QueryClientProvider client={x}>
<AuthContextProvider>
  <CartcontextProvider>
    <WishListContext>
    <Toaster/>
    <RouterProvider router={myrouter}/>
    </WishListContext>
  </CartcontextProvider>
  </AuthContextProvider>
</QueryClientProvider>
  )
}

export default App
