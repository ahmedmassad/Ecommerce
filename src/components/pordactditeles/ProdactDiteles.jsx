

import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from "axios";
import { InfinitySpin } from 'react-loader-spinner';
import { useContext, useState } from 'react';
import {Cartcontext } from '../../Context/Cartcontext';
import { toast } from 'react-hot-toast';



const ProdactDiteles = () => {
  const {addprodactcart}=  useContext(Cartcontext)

  const[lodning,setlodning] = useState(false);

function getProdactDiteles(){
    
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}

 async function addtoprodac() {
    setlodning(true);
  const data =  await addprodactcart(id)
  if (data) {
    toast.success(data.message);
    setlodning(false);
 
  }else{
    toast.error('erroe');
    setlodning(false)
  }
  
}


    const {id} = useParams()
   const {data,isLoading } =  useQuery(`ProdactDitele${id}`, getProdactDiteles)
     
   if(isLoading) return <div className="flex justify-center items-center h-screen bg-green-400 "><InfinitySpin size={50} color="#fff" /></div>
    return (
        <section className='py-8'>

            <div className='w-full md:w-[80%] mx-auto'>

                <div className='flex   flex-wrap justify-center items-center'>

                    <div className='md:w-[50%] w-full p-5'>
                        <img src={data?.data.data.imageCover} alt='Product' className='' /> 
                    </div>

                    <div className='md:w-[50%] w-full  p-5'>
                        <h2 className='text-2xl mb-3 font-semibold'>{data?.data.data.title}</h2>
                        <p className='text-1xl mb-3 '>{data?.data.data.description}</p>
                        <h2 className='text-2xl mb-3 font-mono'>{data?.data.data.category.name} </h2>
                        <div className="mt-3">
                            <span> EGY : {data?.data.data.price}</span>
                            <span ><i className=" fa-solid fa-star text-yellow-300 ml-3 mr-1"></i>{data?.data.data.ratingsAverage}</span>
                        </div>
                        <button
                        onClick ={addtoprodac}
                         className="w-full mt-5 text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-4
                          focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5">
                            {lodning?<i className=' fa-solid fa-spinner fa-spin text-white'></i>:"Add to Cart"}
                        </button>

                    </div>

                </div>

            </div>
            
        </section>
    );
};

export default ProdactDiteles;