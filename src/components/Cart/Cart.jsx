import { useContext } from "react";
import { Cartcontext } from "../../Context/Cartcontext";
import { Link } from "react-router-dom";


const Cart = () => {

    const{numOfItem,prodacts,Totelprice,updateCount,deleteCart,clearCart} = useContext(Cartcontext)
    
    return <section className="py-8 h-screen">
       <div className="w-full md:w-[80%] bg-slate-300  mx-auto p-5 ">
    {prodacts.length != 0 ? <>
      <h2 className="text-3xl font-mono">Shop Cart : {numOfItem}</h2>
        <h3 className="text-green-600  text-2xl font-mono">Total Cart Price :{Totelprice}</h3>
        <button
              onClick={clearCart}
               className="
             text-white bg-red-500  focus:outline-none focus:ring-4
                          focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 me-3
              ">ClearCart</button>
        <Link to="/Paymant"
             
               className="
             text-white bg-green-500  focus:outline-none focus:ring-4
                          focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5
              ">PaymantCash</Link>
      {prodacts?.map(function(item,idx){ 
        return<>
        <div key={idx} className="flex flex-wrap  justify-center items-center border-b-2  border-blue-300">
           <div className="w-1/6 p-5">
         
              <img src={item.product.imageCover} alt="" className="w-full"/>
           </div>
           <div className="w-4/6 p-5">
               
              <h3 className="mb-3"> {item.product.title}</h3>
              <h3  className="mb-3">{item.price}</h3>
              <h3  className="mb-3">{item.product.id}</h3>
              <button
              onClick={() => deleteCart(item.product.id)}
               className="
             text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-4
                          focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5
              ">remove</button>
           </div>
           <div className="w-1/6 p-5 flex justify-between">
           <button 
            onClick={() => updateCount(item.product.id,  item.count + 1)}
            className="
             text-white bg-blue-500 focus:outline-none focus:ring-4
                         font-medium rounded-lg text-sm px-5 py-2.5
              ">+
              </button>
              <h2>{item.count}</h2>
               <button 
               disabled={item.count == 0 ? true : false}
                  onClick={() => updateCount(item.product.id,  item.count - 1)}
                className="
             text-white bg-red-500  focus:outline-none focus:ring-4
                          font-medium rounded-lg text-sm px-5 py-2.5
              ">-</button>
           </div>
        </div>
        </>
     })}
    </> : <div> <h2 className=" text-green-400 text-7xl  text-center"> No Data of Cart </h2> </div>}
       </div>
    </section>
};

export default Cart;