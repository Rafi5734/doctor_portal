import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import giflogo from "../../../images/GIFLogo.png";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  //signOut
  const logout = () => {
    signOut(auth);
    // navigate("/");
    localStorage.removeItem("accessToken");
  };
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bg-base-100 z-50 ">
      <div className="navbar  px-4 lg:px-16 lg:py-4 ">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-font-semiboldbox w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="consultation">Consultation</NavLink>
              </li>
              <li>
                <NavLink to="/healthPlans">Health Plans</NavLink>
              </li>
              <li>
                <NavLink to="/OrderMedicine">Order Medicine</NavLink>
              </li>
              {/* <li>
                <NavLink to="/diagnostics">Home Diagnostics</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/enterprise">Enterprise</NavLink>
              </li> */}
              {user ? (
                <li>
                  <NavLink className="rounded " to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
              <li>
                <NavLink to="/forDoctors">For Doctors</NavLink>
              </li>
            </ul>
          </div>
          <a className=" normal-case text-xl">
            <Link to="/" className="">
              <p>wizzeHealth</p>
              {/* <img className="w-48 lg:w-64 " src={giflogo}></img> */}
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 mt-2">
            <li>
              <NavLink className="rounded font-semibold " to="/consultation">
                Consultation
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/healthPlans">
                Health Plans
              </NavLink>
            </li>
            <li>
              <NavLink className="rounded font-semibold" to="/OrderMedicine">
                Order Medicine
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="rounded font-semibold" to="/diagnostics">
                Home Diagnostics
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink className="rounded font-semibold" to="/enterprise">
                Enterprise
              </NavLink>
            </li> */}
            {user ? (
              <li>
                <NavLink className="rounded font-semibold" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            ) : (
              <></>
            )}

            <li>
              <NavLink className="rounded font-semibold" to="/forDoctors">
                For Doctors
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div>
            {user ? (
              <button
                onClick={logout}
                className="rounded-full bg-primary p-1 lg:p-2"
              >
                <span className=" px-2 lg:px-4 text-white "> Logout</span>
              </button>
            ) : (
              <Link to="/login" className="rounded-full bg-primary p-1 lg:p-2">
                <span className=" px-2 lg:px-4 text-white "> Login</span>
              </Link>
            )}
          </div>
          {/* <select data-choose-theme className="outline-none bg-transparent">
            <option className="" value="">
              Default
            </option>
            <option className="" value="light">
              Light
            </option>
            <option className="" value="dark">
              Dark
            </option>
          </select> */}
          {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
            Theme
          </button> */}
          <span className="w-4"></span>
          <label className="swap swap-rotate ">
            <input data-toggle-theme="dark,light" type="checkbox" />

            <svg
              className="swap-on fill-current w-8 h-8 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <label
            for="dashBoard-sidebar"
            tabIndex={0}
            className="btn btn-ghost lg:hidden mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
      <hr className=" bg-[#333333] "></hr>
    </div>
  );
};

export default Navbar;
