import React, { useState } from "react";
import Card from "./Components/Card";
let App = () => {
  const data = [
    {
      name: "John",
      profession: "Designer",
      image:
        "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false
    },
    {
      name: "Ramp",
      profession: "Webflow",
      image:
        "https://images.unsplash.com/photo-1584984647264-7e6f4e6d6b91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false
    },
    {
      name: "Gian",
      profession: "FrontEnd",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false
    },
    {
      name: "Bob",
      profession: "UI/UX",
      image:
        "https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        friends: false
    },
  ];

  const [val, setVal] = useState(data);
  const handleFriendsButton = (index)=>{
    setVal((prev)=>{
    return prev.map((item, idx)=>{
        if(idx === index){
          return {...item, friends: !item.friends}
        }
        return item;
      })
    })
  }
  return (
    <>
    <div className="w-screen h-screen bg-slate-500 flex items-center justify-center gap-10">
      {val.map((item, idx) => (
          <Card key={idx} index={idx} name={item.name} profession={item.profession} image={item.image} friends={item.friends} handleClick={handleFriendsButton}/>
      ))}
    </div>
    </>
  );
};
export default App;
