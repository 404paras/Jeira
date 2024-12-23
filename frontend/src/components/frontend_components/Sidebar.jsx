import React, { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { GoCheckCircle, GoCheckCircleFill } from "react-icons/go";
import { RiSettings4Fill, RiSettings4Line } from "react-icons/ri";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const sidebar = [
    {
      label: "Home",
      icon: <GoHome />,
      active: <GoHomeFill />,
      href: "/home",
    },
    {
      label: "My Task",
      icon: <GoCheckCircle />,
      active: <GoCheckCircleFill />,
      href: "/task",
    },
    {
      label: "Settings",
      icon: <RiSettings4Line />,
      active: <RiSettings4Fill />,
      href: "/settings",
    },
    {
      label: "Members",
      icon: <FaRegUser />,
      active: <FaUser />,
      href: "/members",
    },
  ];

  return (
    <div className="relative w-full">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 border-black-100 fixed px-4 py-2 m-2 z-50 bg-gray-200 rounded-md shadow-md"
      >
        <IoMenuSharp  size={24} />
      </button>
      <div
        className={`fixed inset-y-0 left-0 bg-gray-100 border-r p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:w-full h-screen z-50 `}
      >
        <div className="text-lg font-bold mb-6">Project Name</div>
        <div className='w-full '>
        <Navigation data={sidebar} currentPath={location.pathname} /></div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;

const Navigation = ({ data, currentPath }) => {
  return (
    <ul className="space-y-4 w-full">
      {data.map((item, index) => (
        <li key={index} className="flex items-center">
          <Link
            to={item.href}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors m-2 w-full ${
              currentPath === item.href
                ? "bg-blue-500 text-white shadow-lg"
                : "hover:bg-gray-200"
            }`}
          >
            {currentPath === item.href ? item.active : item.icon}
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
