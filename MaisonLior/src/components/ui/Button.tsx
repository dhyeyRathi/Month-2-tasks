import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    className: string;
    onClick?: () => void;

}

const Button = ({children, className,onClick, ...props}: ButtonProps) => {
  return (
    <button className={`border-1  hover:bg-black hover:border-black 
        tracking-[0.5em] font-body uppercase ${className}`}
    {...props} onClick={() =>onClick}>
        {children}
    </button>
  )
}

export default Button
