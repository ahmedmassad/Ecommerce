import {  NavLink, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/freshcart-logo.svg"
import { useContext } from "react";
import { authContext } from "../../Context/AuthContext";
import { Cartcontext } from "../../Context/Cartcontext";
import { Wishlist } from "../../Context/WishListContext";







const Navbar = () => {

    const {setToken,token} = useContext(authContext)
    const{numOfItem} =  useContext(Cartcontext)
    const{NumOfItem} =  useContext(Wishlist)
    const navigate = useNavigate()
    function Logout(){
        setToken(null)
        localStorage.removeItem("tkn")
        navigate("/Login")
    }
    return (
       <>
      <div className=" bg-neutral-100  p-4">
            <div className=" w-[90%] lg:flex lg:justify-between lg:items-center mx-auto text-center">
                <div className="flex justify-center">
                    <NavLink  to="/"><img src={logo} alt="logo" /></NavLink>
                </div>
                <nav >
                    <ul className="lg:flex lg:justify-center">
                     {token ? <>
                       
                        <li className="p-2">
                        <NavLink  to="/Home">Home</NavLink>
                        </li>
                        <li className="p-2">
                        <NavLink  to="/Products">Products</NavLink>
                        </li>
                        <li className="p-2">
                        <NavLink  to="/Categories">Categories</NavLink>
                        </li>
                        <li className="p-2 ">
                        <NavLink  to="/Brands">Brands</NavLink>
                        </li>
                        <li className="p-2 relative">
                        <NavLink  to="/Wishlistt">Wishlist</NavLink>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 dark:border-gray-900">{NumOfItem}</div>
                        </li>
                        <li className="p-2 relative">
                        <NavLink  to="/cart">Cart</NavLink>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 dark:border-gray-900">{numOfItem}</div>
                        </li>
                     </>
                     :""
                     }
                    </ul>
                
                </nav>
                <div className="social">
                <i className="fa-brands fa-instagram p-2"></i>
                <i className="fa-brands fa-facebook p-2"></i>
                <i className="fa-brands fa-twitter p-2"></i>
                <i className="fa-brands fa-linkedin p-2"></i>
                </div>
                <div className="Login-Register">
                    {token ?
                    <button className="p-2" onClick={Logout}>
                    Logout
                    </button >
                    :<>
                        <NavLink className="p-2" to="/Login">Login </NavLink>
                        <NavLink className="p-2" to="/Register">Register</NavLink>
                    </>
                    }
                </div>
            </div>
        </div>


      








       </>
        
    );
};

export default Navbar;