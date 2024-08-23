
import Homeslider from './../home/Homeslider';
import CategoreiesSlider from "./../categoreiesSlider/CategoreiesSlider";

import Products from './../Products/Products';




const Home  = () => {



    return <>
<section className="py-8">
    <div className="w-full md:w-[90%] m-auto">
    <Homeslider/>
    <CategoreiesSlider />
        <Products />
    </div>
</section> 


    
    </>
    ;
};

export default Home;

