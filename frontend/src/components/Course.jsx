import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import list from "../assets/list.json";
import axios from "axios"
import Card from './Card';
function Course() {
  const [book,setbook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
       try{
const res=await axios.get("http://localhost:4001/book")
        console.log("new form course")
       console.log(res.data);
       setbook(res.data);
       }
       catch(error){
        console.log("error is ",error);
       }
    }
    getBook();
  },[])
  return (
    <>
    <div className=' container mx-auto  md:px-20  min-h-5/6 pt-25 pb-7'>
    <div className='text-center  justify-center items-center'>
      <h1 className=' text-2xl font-semibold'>We are delighted to have you  
        <span className='text-pink-500 text-2xl font-semibold '> here :)</span>
      </h1>
      <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab veritatis doloremque a vel nulla voluptatem eius molestias eveniet ducimus, velit recusandae delectus molestiae reprehenderit possimus sunt nobis nesciunt, sed at.
      earum soluta debitis sint perspiciatis deleniti optio voluptatem doloremque?</p>
      <Link to={"/"}>
      <button className='text-white bg-pink-500 px-3.5 py-1.5 rounded-md mt-6.5 cursor-pointer font-semibold' >Back</button>
     </Link>

   <div className="mt-9 grid grid-cols-1 md:grid-cols-3 gap-7 ">
  {
    book.map(book => (
      <Card className=""
        key={book.id}
        name={book.name}
        price={book.price}
        title={book.title}
        image={book.image}
        category={book.category}
      />
    ))
  }
</div>
      </div>
    </div>
    </>
  )
}

export default Course