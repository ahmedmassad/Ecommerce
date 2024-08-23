import axios from "axios";
import { useContext, useState } from "react";
import { Cartcontext } from './../../Context/Cartcontext';
import toast from "react-hot-toast";





const Paymant = () => {

    const [details, setDetails] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

     const {cartId, setnumOfItem , setprodacts , setTotelprice}  = useContext(Cartcontext)
    async function PaymantCash(){

        const dataPayment = {
            
            shippingAddress:{
                details,
                 phone,
                city
                  }
        }
        try {
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, dataPayment  
            ,{
                headers:{
                    token:localStorage.getItem("tkn")
                }
            } )
            setprodacts([])
            setnumOfItem(0)
            setTotelprice(0)
            toast.success(data.status)
            return data
        } catch (error) {
            toast.success("error payment cart")
        }
    }
    async function onlinPaymant(){

        const dataPayment = {
            
            shippingAddress:{
                details,
                 phone,
                city
                  }
        }
        try {
            const {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`, dataPayment  
            ,{
                headers:{
                    token:localStorage.getItem("tkn")
                }
            } )
            window.open(data.session.url)
            toast.success(data.status)
            return data
        } catch (error) {
            toast.success("error payment cart")
        }
    }


    return (
        <div className=" py-5">
            <h1 className="mb-8  text-green-500 text-5xl text-center font-bold">PaymantCash</h1>
        <div className="md:w-[60%] mx-auto md:p-0 p-5">
        <div className="relative z-0 w-full mb-5 group">
                <input type="tel"
                name="phone" 
                id="phone" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                onChange={(e)=>setPhone(e.target.value)}
                 />
                <label htmlFor="phone" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                phone</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                name="city" 
                id="city" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                onChange={(e)=>setCity(e.target.value)}
                 />
                <label htmlFor="city" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                city
            </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
                <input type="text"
                name="details" 
                id="details" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                onChange={(e)=>setDetails(e.target.value)}
                 />
                <label htmlFor="details" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                details
            </label>
        </div>
        <button 
        onClick={PaymantCash}
        className="
         text-white bg-green-500  focus:outline-none focus:ring-4
                          focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 
        me-3 ">PaymantCash</button>

        <button 
        onClick={onlinPaymant}
        className="
         text-white bg-green-500  focus:outline-none focus:ring-4
                          focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5
        ">Paymant onlie</button>
        </div>
        </div>
    );
};

export default Paymant;