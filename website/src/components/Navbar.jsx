import React from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import {
  CircleUser,
  ShoppingCart,
  ChevronLeft,
  Settings,
  UserRoundPen,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import DropdownItem from "./ui/DropdownItem";

const Navbar = ({ className }) => {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <>
      <header
        className={`bg-primary/40 backdrop-blur-md w-full h-30 flex justify-between right-0 left-0 top-0  md:px-12 lg:px-18 fixed z-3 items-center py-5 ${className}`}
      >
        <img
          src={logo}
          className="h-full scale-50 sm:scale-80 md:scale-100"
          alt="levi's logo"
        />

        {/* for bigger screens */}

        <ul className="h-full w-auto hidden sm:flex justify-between items-center text-secondary font-bold text-2xl gap-2 md:gap-4 lg:gap-10">
          <li className="relative group">
            <NavLink to="/" end className="relative">
              {({ isActive }) => (
                <>
                  Home
                  <hr
                    className={`h-0.5 left-0 absolute bg-secondary w-full transition-transform duration-400 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/about" className="relative">
              {({ isActive }) => (
                <>
                  About
                  <hr
                    className={`h-0.5 left-0 absolute bg-secondary w-full transition-transform duration-400 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li className="relative group">
            <NavLink to="/contact">
              {({ isActive }) => (
                <>
                  Contact
                  <hr
                    className={`h-0.5 left-0 absolute bg-secondary w-full transition-transform duration-400
              ${isActive ? "scale-100" : "scale-0 group-hover:scale-100"}`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart">
            {({isActive}) => (<>
              <div className={`relative group hover:bg-secondary/80 hover:text-primary  p-4 rounded-full ${isActive? "bg-secondary/80 text-primary":""}`}>
                <ShoppingCart
                  size={35}
                  strokeWidth={3}
                  absoluteStrokeWidth
                  className=" sm:group"
                ></ShoppingCart>
              </div></>)}
            </NavLink>
          </li>

          <li className="relative group">
            <Dropdown
              className=""
              title={
                <CircleUser
                  size={35}
                  strokeWidth={3}
                  absoluteStrokeWidth
                  className=""
                />
              }
            >
              <NavLink to="/mysetting">
                {({ isActive }) => (
                  <>
                    <DropdownItem
                      className={`${isActive ? "bg-secondary text-primary" : ""}`}
                    >
                      {" "}
                      <Settings />
                      Settings
                    </DropdownItem>
                  </>
                )}
              </NavLink>

              <NavLink to="/myprofile">
                {({ isActive }) => (
                  <>
                    <DropdownItem
                      className={`${isActive ? "bg-secondary text-primary" : ""}`}
                    >
                      <UserRoundPen />
                      My profile
                    </DropdownItem>
                  </>
                )}
              </NavLink>
              <DropdownItem>
                <LogOut />
                Log out
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>

        {/* for smaller screens */}
        <div
          aria-label="menu-for-mobile-screens"
          className=" sm:hidden flex gap-8 items-center text-secondary"
        >
          <NavLink to="/cart">
            <ShoppingCart
              size={35}
              strokeWidth={3}
              absoluteStrokeWidth
              className="scale-90"
            />
          </NavLink>

          <div
            aria-label="hamburger-menu"
            className={`flex flex-col group transition-all duration-200 scale-80 pr-8 ${hamburgerActive ? "" : "gap-2"}`}
            onClick={() => setHamburgerActive(!hamburgerActive)}
          >
            <hr
              className={`h-1 w-10 bg-white transition-all duration-200 ${hamburgerActive ? "rotate-60" : ""}`}
            />
            <hr className="h-1 w-10 bg-white" />
            <hr
              className={`h-1 w-10 bg-white transition-all duration-200 ${hamburgerActive ? "-rotate-60" : ""}`}
            />
          </div>
        </div>
      </header>

      {/* sidebar */}
      <div
        className={`fixed w-screen h-screen bg-primary/40 backdrop-blur-lg z-3 sm:hidden flex flex-col bottom-0 left-0 right-0 top-30 transition-all duration-200 border-l-1 border-t-1 border-white ${hamburgerActive ? "" : "left-[100%]"}`}
        aria-label="sidebar"
      >
        <NavLink
          to="/"
          className={({
            isActive,
          }) => `w-full px-4 py-2 text-2xl font-bold border-b-1 border-t-1 border-white opacity-0 bottom-[20%] transition-all duration-400 ${hamburgerActive ? "opacity-100 bottom-[10%]" : ""}
            ${isActive ? "bg-secondary text-primary" : "text-secondary"}`}
          onClick={() => setHamburgerActive(!hamburgerActive)}
        >
          Home
        </NavLink>
        <NavLink
          to="/myprofile"
          className={({
            isActive,
          }) => `w-full px-4 py-2 text-2xl font-bold border-b-1 border-t-1 border-white opacity-0 bottom-[20%] transition-all duration-400 ${hamburgerActive ? "opacity-100 bottom-[10%]" : ""}
            ${isActive ? "bg-secondary text-primary" : "text-secondary"}`}
          onClick={() => setHamburgerActive(!hamburgerActive)}
        >
          Profile
        </NavLink>

        <NavLink
          to="/About"
          className={({
            isActive,
          }) => `w-full px-4 py-2 text-2xl font-bold border-b-1 border-t-1 border-white opacity-0 bottom-[20%] transition-all duration-400 ${hamburgerActive ? "opacity-100 bottom-[10%]" : ""}
            ${isActive ? "bg-secondary text-primary" : "text-secondary"}`}
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({
            isActive,
          }) => `w-full px-4 py-2 text-2xl font-bold border-b-1 border-t-1 border-white opacity-0 bottom-[20%] transition-all duration-400 ${hamburgerActive ? "opacity-100 bottom-[10%]" : ""}
            ${isActive ? "bg-secondary text-primary" : "text-secondary"}`}
          onClick={() => setHamburgerActive(!hamburgerActive)}
        >
          Contact
        </NavLink>

        <NavLink
          to="/mysetting"
          className={({
            isActive,
          }) => `w-full px-4 py-2 text-2xl font-bold border-b-1 border-t-1 border-white opacity-0 bottom-[20%] transition-all duration-400 ${hamburgerActive ? "opacity-100 bottom-[10%]" : ""}
            ${isActive ? "bg-secondary text-primary" : "text-secondary"}`}
          onClick={() => setHamburgerActive(!hamburgerActive)}
        >
          Settings
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
