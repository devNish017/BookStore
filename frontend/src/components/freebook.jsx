import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import list from "../../src/assets/list.json";
import Card from './Card';
import axios from "axios"
function Freebook() {
    

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
 
}
   
const [book,setbook] =useState([])
 
useEffect(()=>{
   const getBook=async()=>{
    try{
const res= await axios.get("http://localhost:4001/book")
         console.log("heelo ji");
         
    setbook(res.data.filter(book=>book.price===0));
    }
    catch(error){
      console.log("error is ",error)
    }
    
   }
   getBook();
},[])


  return (
    <>
    <div className='container   md:ml-18 ml-4 my-8'>
        <h1 className='font-bold text-l  '>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque asperiores, placeat reiciendis earum ea error, doloribus eos accusamus voluptates quod, in dolores corrupti perferendis quidem magnam.</p>
    
     
     <div>
        <Slider {...settings} className=' mt-3' >{
        book.map((book)=>(
          <div  key={book.id} className='px-3'>
            <Card className=""
           
            name={book.name}
            price={book.price}
            title={book.title}
            image={book.image}
            category={book.category}
            
            />
            </div>
        )
)}
        
      </Slider>
     </div>
    </div>
    
    </>
  )
}

export default Freebook