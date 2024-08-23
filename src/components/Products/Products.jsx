import axios from "axios";
import {InfinitySpin } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext} from "react";
import { Cartcontext } from "../../Context/Cartcontext";
import { Wishlist } from "../../Context/WishListContext";


const Products = () => {


const {addprodactcart}=  useContext(Cartcontext)

const {addwishlist} = useContext(Wishlist)


async function getAllproduct(){
        return await axios.get("https://ecommerce.routemisr.com/api/v1/products")

}
const {data , isLoading } =  useQuery("product",getAllproduct)
if(isLoading) return <div className="flex justify-center items-center h-screen bg-green-400"><InfinitySpin size={50} color="#fff" /></div>



  async function addtoprodac(id) {
  const data =  await addprodactcart(id)
  if (data) {
    toast.success(data.message);
  }else{
    toast.error('erroe');
  }
}
  async function Addwishlist(id) {
  const data =  await addwishlist(id)
  if (data) {
    toast.success(data.message);
  }else{
    toast.error('erroe');
  }
}
    return <>
<section className="py-8">
    <div className="w-full md:w-[90%] m-auto">
            <div  className="flex flex-wrap justify-center items-center  ">
            {data.data.data.map(function(item,idx){
            return(
                <div key={idx} className=" overflow-hidden w-full sm:w-1/2 md:w-1/4  lg:w-1/6 p-2">
                    <div  className="inner bg-white border-300 border-[1px] relative hero p-4">
                    <Link to={`/ProdactDiteles/${item.id}`} >
                        <img src={item.imageCover} alt="lo" className="w-full" />
                        <h2 className="text-green-400 mt-3">{item.category.name}</h2>
                        <h3 className="mt-3">{item.title.split(" ").slice(0,2).join(" ")}</h3>
                        <div className="mt-3 mb-5">
                            <span>EGY {item.price}</span>
                            <span ><i className=" fa-solid fa-star text-yellow-300 ml-3 mr-1"></i>{item.ratingsAverage}</span>
                        </div>
                        </Link>
                        <div  className="flex justify-end mb-10 ">
                        <button onClick={()=>{Addwishlist(item.id)}
                        }>
                         <i className="fa-solid fa-heart fa-2xl "></i>
                        </button>
                        </div>
                       <div>
                       <button
                        onClick ={() =>{addtoprodac(item.id)}}
                        className= "absolute   text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 AddtoCart ">
                          Add to Cart
                        </button>
                       </div>
                  </div>
            </div>
            )
            }
            )}
            </div>
    </div>
</section> 


    
    </>
    ;
};

export default Products;



