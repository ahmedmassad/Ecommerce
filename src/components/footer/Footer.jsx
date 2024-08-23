

const Footer = () => {
    return (
        <div className="bg-neutral-100  p-4">
            <div className=" w-[90%] flex  items-start mx-auto flex-col">
                   <h2 className="mb-2">Get the FrechCart App</h2>
                   <p  className="mb-2">we will you link open it on your phone to dawnload teh app</p>
                   <div className="flex justify-between w-[100%] mb-2">
                    <input type="text"  placeholder="Email" className="w-1/2   outline-none"/>
                    <button className="bg-green-500 text-white p-1  rounded">Share App Link</button>
                   </div>
            </div>
        </div>
    );
};

export default Footer;