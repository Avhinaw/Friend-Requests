import React from "react";

let Card = ({image, profession, name, friends, index, handleClick}) =>{

    return(
        <div className="w-52 rounded-md overflow-hidden shadow-lg hover:shadow-[#aca7a7] transition-all duration-200">
        <div className="w-full h-32">
            <img className="h-full w-full object-cover object-center" src={image}/>
        </div>
        <div className="w-full p-3 bg-[#efefef] flex flex-col gap-1">
            <h3 className="text-xl font-semibold">{name}</h3>
            <h5 className="text-sm">{profession}</h5>
            <button onClick={()=>handleClick(index)} className={`px-4 py-2 ${friends? "bg-gray-500 hover:bg-gray-600" : "bg-blue-500 hover:bg-blue-600"} rounded-md text-sm text-white font-semibold hover:bg-blue-600`}>{friends ? "Request Sent" : "Add as Friend"}</button>
        </div>
        </div>
    )
}

export default Card;