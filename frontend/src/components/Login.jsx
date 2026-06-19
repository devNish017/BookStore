import React from 'react'
 import { useForm } from "react-hook-form"
 import axios from "axios"
 import { Link } from 'react-router-dom'
 import toast from 'react-hot-toast'
//  import Signup from './Signup'
function Login({ closemodal }) {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
      const userInfo ={
         
         email:data.email,
         password:data.password
        
      }
      
  
      await axios.post("https://bookstore-16el.onrender.com/user/login",userInfo)
      .then((res)=>{
         console.log(userInfo)
          if(res){
           
            
            toast.success("login Successfull");
             setTimeout(()=>{
            

           window.location.reload();
        },1000)
            
          }
          localStorage.setItem("User",JSON.stringify(res.data.user))
      }).catch((err)=>{
        console.log(err)
        // alert("Error : "+err.response.data.message)
        toast.error("Error : Invalid Username And Password");
      })
    }

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black/40">
       <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-6 rounded-lg relative md:w-md ">
     
        <button
          onClick={closemodal}
          className="absolute right-2 top-2 text-xl cursor-pointer duration-200"
        >
          ✕
        </button>

        <h3 className="font-bold text-lg">Login </h3>
        <div className='flex flex-col gap-2'>
            <div>
               <label htmlFor="email" className='block mt-2'>Email:  </label>
            <input type="email" name='email' id='email' className='border w-70' 
            {...register("email", { required: true })}
            />
            <br/>
              {errors.email && <span className='text-[10px] font-bold text-red-500'>This field is required</span>}
            </div>
            <div>
                 <label htmlFor="pass" className='block mt-6'>Password:  </label>
            <input type="password" name='pass' id='pass' className='border w-70 '  
            {...register("password", { required: true })}
            />
             <br/>
             {errors.password && <span className='text-[10px] font-bold text-red-500'>This field is required</span>}
            </div>
            
                
         </div>
         <div className='mt-2.5 text-[15px] flex justify-between'>
             <button className='bg-pink-500 ml-3.5 text-amber-50 px-3 py-1  rounded-md text-[12px] cursor-pointer' type='submit'>Login</button>
          <div> Not regestired?
            <Link to="/Signup"
              className='text-[15px] underline decoration-blue-800 text-blue-800 cursor-pointer'>Signup 
              </Link> 
         </div>
        
       </div>
      </div>
      </form>

    </div>
  )
}


export default Login
