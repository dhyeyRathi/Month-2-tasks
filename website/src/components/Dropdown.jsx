import React, { useState , useEffect } from "react";

const Dropdown = ({ title, children, className = "" }) => {
  const [open, setOpen] = useState(false);



  return (
    <div className={`relative ${className}`}>
      <button
        className={` w-full items-center p-4  hover:cursor-pointer hover:bg-secondary/80 hover:text-primary font-bold rounded-full relative ${open ? "bg-secondary/80 text-primary " : "text-white "}`}
        
        onMouseEnter={() => setOpen(true)}
        onClick={()=>setOpen(!open)}
        
        
      >
        {title}
        {/* <p className={`font-bold absolute right-3 bottom-3 ${open? "rotate-180":""}`}>v</p> */}
      </button>

      <div
        className={`w-full rounded-lg flex flex-col left-[-250%] pt-6 absolute  transition-transform duration-200 z-5 ease-in-out rounded ${
          open
            ? "opacity-100 translate-y-1"
            : "opacity-0 hidden -translate-y-3  "
        }`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
