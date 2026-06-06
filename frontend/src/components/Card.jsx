import React from "react";

function Card(props) {
  return (
    <div className="card bg-base-100 w-full shadow-sm   mx-3 cursor-pointer  transition-transform duration-300 ease-in-out 
                hover:scale-105 hover:shadow-xl  ">
      <figure>
        <img
          className="h-40 w-full object-cover"
          src={props.image}
          alt={props.name}
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {props.name}
          <div className="badge badge-secondary">New</div>
        </h2>

        <p>{props.title}</p>

        <div className="card-actions justify-between">
          <div className="badge badge-outline  py-3.5">
            {props.price === 0 ? "FREE" : `Rs. ${props.price}`}
          </div>
          <div className="badge badge-outline hover:bg-pink-500 hover:text-white  py-3.5">{props.category}</div>
        </div>
      </div>
    </div>
  );
}

export default Card