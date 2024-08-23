
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";
import toast from "react-hot-toast";


export const Cartcontext = createContext()
const CartcontextProvider = ({children}) => {
    const {token} =   useContext(authContext)
    
    const [numOfItem, setnumOfItem] = useState(0)
    const [prodacts, setprodacts] = useState([])
    const [Totelprice, setTotelprice] = useState(0)
    const [cartId , setcartId] = useState(0)
async function addprodactcart(productId){
    try {
        const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {productId:productId},{
            headers:{
                token:localStorage.getItem("tkn")
            }
        } )
        getusercart()
        // toast.success(data.message);
        return data
    } catch (error) {
        console.log(error);
    }
}
async function getusercart(){
    try {
     const  {data} = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",{
        headers:{
            token:localStorage.getItem("tkn")
        }
    })

    setnumOfItem(data.numOfCartItems)
    setTotelprice(data.data.totalCartPrice) 
    setprodacts(data.data.products)
    setcartId(data.data._id)
    return data
    } catch (error) {
        console.log(error,"cartcontext");
    }
}
async function updateCount(id,count){
    try {
        const {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
                count: count
            },
            {
            headers:{
                token:localStorage.getItem("tkn")
            }
        })
        
    setnumOfItem(data.numOfCartItems)
    setTotelprice(data.data.totalCartPrice) 
    setprodacts(data.data.products)
    setcartId(data.data._id)
       return data
    } catch (error) {
        console.log(error);
    }
}
async function deleteCart(id){
    try {
        const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
            {
            headers:{
                token:localStorage.getItem("tkn")
            }
        })
        
    setnumOfItem(data.numOfCartItems)
    setTotelprice(data.data.totalCartPrice) 
    setprodacts(data.data.products)
    setcartId(data.data._id)
       return data
    } catch (error) {
        console.log(error);
    }
}
async function clearCart(){
    try {
        const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/`,
            {
            headers:{
                token:localStorage.getItem("tkn")
            }
        })
        
    setnumOfItem(0)
    setTotelprice(0) 
    setprodacts([])
       return data
    } catch (error) {
        console.log(error);
    }
}
useEffect(function(){
    if(token != null){
        getusercart()
    }
},[token]);
    return (
        <Cartcontext.Provider value={{addprodactcart,numOfItem,prodacts,Totelprice,updateCount,deleteCart,clearCart,cartId,setnumOfItem,setprodacts,setTotelprice}}>
            {children}
        </Cartcontext.Provider>
    );
};
export default CartcontextProvider;


