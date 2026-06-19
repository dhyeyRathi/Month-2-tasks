import React from "react";

const DropdownItem = ({ children , ...props }) => {
  return (
    <button
      className={`flex items-center bg-primary/30  backdrop-blur-md justify-left gap-4 w-70 py-5 px-8 hover:bg-secondary/80 hover:text-primary  text-secondary font-bold ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default DropdownItem;
