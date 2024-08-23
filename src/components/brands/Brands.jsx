
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

import { useQuery } from "react-query";

const Brands = () => {



    async function getAllbrands(){
    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }
    const {data ,isLoading} =  useQuery("Brands",getAllbrands)
    if(isLoading) return <div className="flex justify-center items-center h-screen bg-green-400 "><InfinitySpin size={50} color="#fff" /></div>
    return (
        <>
        <section className="py-8">
            <div className="w-full md:w-[80%] m-auto">
                <div  className="flex flex-wrap  justify-between items-center text-center">
                    {data?.data.data.map(function(item,idx){
                    return(
                        <div key={idx} className="w-full    md:w-1/4 p-4 mt-5">
                        <div className="border-gray-300 rounded border-[1px]">
                        <img src={item.image} alt={item.name} className=" object-cover w-[100%]  h-[300px]"/>
                        <h3>{item.name}</h3>
                        </div>
                        </div>
                    )
                    }
                    )}
                </div>
            </div>
        </section> 
        </>
    );
};

export default Brands;

