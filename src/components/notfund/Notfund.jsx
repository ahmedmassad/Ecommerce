
import notFound from './../../assets/images/error.svg'
const Notfund = () => {
    return (
        <div className="p-8">
            <div className="w-[80%] mx-auto">
              <img src={notFound} alt="Notfund" className='w-[100%]'/>
            </div>
        </div>
    );
};

export default Notfund;