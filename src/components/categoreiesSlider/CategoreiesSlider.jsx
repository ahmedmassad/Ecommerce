
import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";

export default function CategoreiesSlider() {

    async function getCategoreiesSlider(){
     return await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    }

  const {data} =  useQuery("categorySlider",getCategoreiesSlider);

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
   <section className=" p-5">
     <Slider {...settings} >
       {data?.data.data.map(function(item,idx){
         return(
           <div key={idx} className="text-center w-full">
             <img src={item.image} alt={item.name} className="w-full h-[200px]"/>
             <h3>{item.name}</h3>
           </div>
         )
       })}
    </Slider>
   </section>
  );
}