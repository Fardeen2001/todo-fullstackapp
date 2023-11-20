import React, { useState } from "react";
import { TABS } from "../redux/action/type";
import { useDispatch, useSelector } from "react-redux";
import { toggleTabs } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ token }) => {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const currentTab = useSelector((state) => state.currentTab);
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-4 bg-blue-400">
        <div className="flex items-center flex-shrink-0 text-black mr-6 lg:mr-72">
          <h1 className="text-2xl text-white font-bold">To-Do App</h1>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-lg text-white font-bold lg:flex-grow mx-auto ">
            {TABS.map((tab, index) => (
              <button
                key={index}
                className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 hover:text-indigo-500 ${
                  currentTab === tab
                    ? "border-b-4 border-b-indigo-600 text-indigo-600"
                    : ""
                }`}
                onClick={() => {
                  dispatch(toggleTabs(tab));
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>
            {token && (
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/signup", { replace: true });
                }}
                className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Logout
              </button>
            )}
            {!token && (
              <Link
                to={"/signup"}
                className="inline-flex items-center bg-indigo-500 border-0 py-2 px-4 text-white focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Signup
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
