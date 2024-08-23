import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ResetPassword = () => {
    const naviget = useNavigate()

    const user = {
        email:"",
        newPassword:""
    }
     async function resetPassword(values){
    try {
        const data = await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values
        )
        toast.success(data.message)
        naviget("/Login")
    } catch (error) {
        toast.error(error.response.data.message)
    }
 }



 const formik = useFormik({
    initialValues:user,
    onSubmit:resetPassword,
})
    return (
        <section className='py-8 md:w-[60%] mx-auto md:p-0 h-screen'>
            <h1 className=' font-bold fa-2xl pt-10 text-center  text-green-400'>resetPassword</h1>
            <form  onSubmit={formik.handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email"
                name="email" 
                id="email" 
                className="block mt-10 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label htmlFor="email" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="password"
                name="newPassword" 
                id="newPassword" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label htmlFor="password" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                 password</label>
            </div>
            <button  type="submit" className="text-white bg-green-500  focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 focus:outline-none dark:focus:ring-green-500">submit</button>
            </form>
           
                
        </section>
    );
};

export default ResetPassword;