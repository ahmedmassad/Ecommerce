

import Slider from "react-slick";
import Slider1 from "./../../assets/images/slider-image-1.jpeg"
import Slider2 from "./../../assets/images/slider-image-2.jpeg"
import Slider3 from "./../../assets/images/slider-image-3.jpeg"
export default function Homeslider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
  };
  return (
  <section className="p-5">
  <div className="flex flex-wrap justify-center items-center">
    <div className="w-full">
    <Slider {...settings}>
      <div>
        <img src={Slider1} className="w-full h-[400px] block" alt="" />
      </div>
      <div>
      <img src={Slider2} className="w-full h-[400px] block" alt="" />
      </div>
      <div>
      <img src={Slider3} className="w-full h-[400px] block" alt="" />
      </div>
    </Slider>
    </div>
  </div>
  </section>
  );
}