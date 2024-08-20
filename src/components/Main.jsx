import React from 'react'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import { useRef } from 'react';

  import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
  const passwordref=useRef()
    const {
        register,
        handleSubmit,
        watch,reset,
        formState: { errors},
      } = useForm()
      

        const onSubmit = (data) => {
          console.log(data)
          toast.success('Submitted Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          reset()
        }

        const showpass=()=>{
          if(passwordref.current.type.includes("password")){
          passwordref.current.type="text";}
        
        else{
          passwordref.current.type="password"
        }
}
  return (
    <div className="bg-hero h-[820px] bg-no-repeat bg-cover bg-center bg-fixed">
      <ToastContainer />
   <div className="flex flex-col pt-[13%] justify-center items-center">
        <h2 className='text-green-400 text-3xl font-bold tracking-wide'>SIGN IN</h2>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="input flex flex-col mt-10">
            <div className="mb-8">
          <input type="text" className="pl-2 w-60 text-gray-400 bg-transparent border border-b-2 border-t-0 border-x-0 outline-none" placeholder="Username" />
          </div>
          <input type="password" ref={passwordref} className="pl-2 w-60 text-gray-400 bg-transparent border border-b-2 border-t-0 border-x-0 outline-none" placeholder="Password"/>
          <div className="showpass flex items-center space-x-1 my-5">
            <input onClick={showpass} type="checkbox" id="check" /><span onClick={showpass} className="text-white text-sm hover:underline hover:underline-offset-2">Show Password</span>
          </div>
          <button className='text-white bg-green-500 h-9 rounded-sm'>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
    
  )
}

export default Main
