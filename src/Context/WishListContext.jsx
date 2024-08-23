import axios from 'axios';
import  { createContext, useContext, useEffect, useState } from 'react'
import { authContext } from './AuthContext';
export const Wishlist = createContext()
function WishListContext({children}) {
    const {token} =   useContext(authContext)
    const [NumOfItem, setnumOfItem] = useState(0)
    const [prodacts, setprodacts] = useState([])
    const [wishlistId , setwishlistId] = useState(0)

    async function getuserWishlist(){
    try {
        const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist/`,
            {
            headers:{
                token:localStorage.getItem("tkn")
            }
        })
        setprodacts(data.data)
        setwishlistId(data.data._id)
        setnumOfItem(data.count)
    return data
    } catch (error) {
        console.log(error);
    }
}



async function deletewishlist(id){
    try {
        const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
            {
            headers:{
                token:localStorage.getItem("tkn")
            }
        })
        getuserWishlist()
    return data
    } catch (error) {
        console.log(error);
    }
}
async function addwishlist(productId){
        try {
            const {data} = await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId:productId},{
                headers:{
                    token:localStorage.getItem("tkn")
                }
            } )
            getuserWishlist()
            return data
        } catch (error) {
            console.log(error);
        }
}
    useEffect(function(){
        if(token != null){
            getuserWishlist()
        }
    },[token]);
return (
    <Wishlist.Provider value={{addwishlist,deletewishlist,prodacts,setwishlistId,wishlistId,setprodacts,NumOfItem, setnumOfItem}}>
        {children}
    </Wishlist.Provider>
)
}

export default WishListContext;



