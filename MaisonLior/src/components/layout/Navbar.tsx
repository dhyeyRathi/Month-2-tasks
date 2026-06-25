import  { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/icons/hamburger.svg";
import cross from "../../assets/icons/cross.svg";
import Button from "../ui/Button";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 font-light right-0 z-30">
      <header className="backdrop-md bg-ivory/90  py-3 border-b-1 border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
          <NavLink className="flex flex-col leading-none" to="/">
            <span className="font-heading font-light text-2xl tracking-tight text-foreground">
              Maison Lior
            </span>
            <span className="eyebrow  mt-1">
              Wedding Atelier
            </span>
          </NavLink>

          <ul className="flex gap-10 hidden lg:flex font-light tracking-[0.25em] text-foreground ">
            <li>
              <NavLink
                to="/"
                className={({isActive}) => isActive ? `text-sm text-gold font-body tracking-wide`:
              `text-sm hover:text-gold font-body tracking-wide`}
                
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                 className={({isActive}) => isActive ? `text-sm text-gold font-body tracking-wide`:
              `text-sm hover:text-gold font-body tracking-wide`}
                
              >
                Atelier
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({isActive}) => isActive ? `text-sm text-gold font-body tracking-wide`:
              `text-sm hover:text-gold font-body tracking-wide`}
                
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({isActive}) => isActive ? `text-sm text-gold font-body tracking-wide`:
              `text-sm hover:text-gold font-body tracking-wide`}
                
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/journal"
                className={({isActive}) => isActive ? `text-sm text-gold font-body tracking-wide`:
              `text-sm hover:text-gold font-body tracking-wide`}
                
              >
                Journal
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                 className={({isActive}) => isActive ? `text-sm text-gold font-body tracking-wide`:
              `text-sm hover:text-gold font-body tracking-wide`}
                
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <Button
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.25em] uppercase border transition-colors border-foreground text-foreground hover:bg-foreground hover:text-ivory"
          >
           <NavLink to="/contact">Enquire</NavLink> 
          </Button>

          {/* smaller screens and hamburger */}

          <div className=" lg:hidden py-2 w-10 h-10 flex justify-center items-center">
            <button onClick={()=> setHamburgerActive(true)}>
                <img src={hamburger} className="p-0"/>
            </button>
            
          </div>
        </div>
      </header>


      <div aria-label="menu-for-smaller-screens" className={` fixed flex inset-0 bg-ivory flex-col lg:hidden z-60 transition-all duration-300  ease-in-out
         ${hamburgerActive? "translate-y-0 ":"opacity-0 invisible -translate-y-2"}`}>


        <div className="flex items-center justify-between px-6 py-6 ">
          <span className="font-heading text-2xl">Maison Lior</span>
          <button aria-label="Close menu" onClick={()=>setHamburgerActive(false)}>
            <img src={cross} />
          </button>
        </div>

        <nav className={`flex flex-col items-center justify-center gap-8 mt-16 `}>
          <NavLink
            className="font-heading text-4xl text-foreground hover:text-gold transition-colors"
            to="/"
            onClick={()=>setHamburgerActive(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="font-heading text-4xl text-foreground hover:text-gold transition-colors"
            to="/about"
            onClick={()=>setHamburgerActive(false)}
          >
            Atelier
          </NavLink>
          <NavLink
            className="font-heading text-4xl text-foreground hover:text-gold transition-colors"
            to="/services"
            onClick={()=>setHamburgerActive(false)}
          >
            Services
          </NavLink>
          <NavLink
            className="font-heading text-4xl text-foreground hover:text-gold transition-colors"
            to="/portfolio"
            onClick={()=>setHamburgerActive(false)}
          >
            Portfolio
          </NavLink>
          <NavLink
            className="font-heading text-4xl text-foreground hover:text-gold transition-colors"
            to="/journal"
            onClick={()=>setHamburgerActive(false)}
          >
            Journal
          </NavLink>
          <NavLink
            className="font-heading text-4xl text-foreground hover:text-gold transition-colors"
            to="/contact"
            onClick={()=>setHamburgerActive(false)}
          >
            Contact
          </NavLink>
          <Button
            className="mt-8 inline-flex items-center px-8 py-3 text-xs tracking-[0.25em] uppercase border border-foreground"
            onClick={()=>setHamburgerActive(false)}><NavLink  to="/contact"> Enquire</NavLink>
           
          </Button>
        </nav>
      </div>


    </div>
  );
};

export default Navbar;
