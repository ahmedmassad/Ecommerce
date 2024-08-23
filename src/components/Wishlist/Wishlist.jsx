import { useContext } from "react";
import { Wishlist } from "../../Context/WishListContext";
import { Cartcontext } from "../../Context/Cartcontext";









const Wishlistt = () => {

    const {prodacts,deletewishlist} = useContext(Wishlist)
     const {addprodactcart} = useContext(Cartcontext)
    return <section className="py-8 h-screen">
    <div className="w-full md:w-[80%] bg-slate-300  mx-auto p-5 ">
    {prodacts.length != 0 ? <>
      {prodacts?.map(function(item,idx){ 
        return<>
        <div key={idx} className="flex flex-wrap  justify-center items-center border-b-2  border-blue-300">
           <div className="w-1/6 p-5">
         
            <img src={item.imageCover} alt="" className="w-full"/>
           </div>
           <div className="w-4/6 p-5">
            <h3 className="mb-3">{item.title}</h3>
              <h3  className="mb-3">{item.price}</h3>
              <button
              onClick={() => deletewishlist(item.id)}
               className="
             text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-4
                          focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5
              ">remove</button>
           </div>
           <div className="w-1/6 p-5 flex justify-between">
           <button
              onClick ={() =>{addprodactcart(item.id)}}
              className= "absolute   text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 AddtoCart ">
                Add to Cart
              </button>
           </div>
        </div>
        </>
    })}
    </> : <div> <h2 className=" text-green-400 text-7xl  text-center"> No Data of Wishlist </h2> </div>}
    </div>
    </section>
};

export default Wishlistt;