import axios from "axios";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import * as Yup from 'yup';
import { authContext } from "../../Context/AuthContext";


const Login = () => {

const[isloding , setisloding] = useState(false)

const naviget = useNavigate()

const{setToken} = useContext(authContext)

const user = {
    email:"",
    password:"",
}

const validation = Yup.object().shape(
    {
        email:Yup.string().required("Email is required").email("Enter valid Email"),
        password: Yup.string().required("password is required").matches(/^[A-Z][a-z0-9]{3,10}$/, "password must be start upperCase"),
    }
)


async function Loginuser(values){
    setisloding(true)
    try {
    const rus =  await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values)
    toast.success(rus.data.message)
    setisloding(false)
    naviget("/Products")


    setToken(rus.data.token)
    localStorage.setItem("tkn",rus.data.token)

    } catch (error) {
    toast.error(error.response.data.message)
    setisloding(false)
    }
}






    const formik = useFormik({
        initialValues:user,
        onSubmit:Loginuser,
        validationSchema:validation,
    })
    return (
        <div className=" py-5 h-screen">
            <h1 className="mb-8  text-green-500 text-5xl text-center font-bold">Login</h1>
        <div className="md:w-[60%] mx-auto md:p-0 p-5">
            <form onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                <input type="email"
                name="email" 
                id="email" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 />
                <label htmlFor="email" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email</label>
                </div>
                {formik.errors.email && formik.touched.email ?(
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Error</span> {formik.errors.email}
                </div>
                ):("")}
                <div className="relative z-0 w-full mb-5 group">
                <input type="password"
                name="password" 
                id="password" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                placeholder=" "
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label htmlFor="password" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                 password</label>
                </div>
                {formik.errors.password && formik.touched.password ?(
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Error</span> {formik.errors.password}
                </div>
                ):("")}
                <button type="submit"  className="text-white bg-green-500  focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 focus:outline-none dark:focus:ring-green-500">
                {isloding == true ? <i className=" fa-solid fa-spinner  fa-spin text-white"></i>:"Login" }
                </button>
                <Link to="/Forgetpaasword" className="text-white bg-green-500  focus:ring-4 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 focus:outline-none dark:focus:ring-green-500">
                    Forgetpaasword
                </Link>
            </form>
        </div>
        </div>
    );
};

export default Login;