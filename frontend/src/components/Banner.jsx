import React from 'react'
import img1 from "../assets/banner.jpg"
const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl  container mx-auto flex md:px-20 px-4 flex-col md:flex-row mt-18 '>
       <div className='w-full md:w-1/2   md:mt-12 mt-8 md:order-1 order-2 '>
       <h1 className='text-4xl font-bold'>Hello, welcomes to learn something <p className='text-pink-600'>new everyday !!!</p></h1>
       <p className='my-6 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nemo officiis, nostrum impedit quaerat at minima a ea quos accusantium debitis quas </p>
       
       <div>

        <label className="input validator   border-none outline-1" >
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" ></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>
<div>
  {/* button */}
<button className="btn btn-secondary mt-3 md:mt-5  ">Secondary</button>
</div>

       </div>
       
       </div>


       <div className='w-full md:w-1/2   order-1 md:order-2'>
       <div>
        <img src={img1} alt='sorry we are late' className='h-100  ' />
       </div>
       </div>

    

    </div>

  
    </>
  )
}

export default Banner