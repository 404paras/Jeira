import React, { useState } from "react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { GoCheckCircle, GoCheckCircleFill } from "react-icons/go";
import { RiSettings4Fill, RiSettings4Line } from "react-icons/ri";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ChevronsUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Sidebar = () => {
  const navigator = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);

  const sidebar = [
    { label: "Home", icon: <GoHome />, active: <GoHomeFill />, href: "/" },
    { label: "My Task", icon: <GoCheckCircle />, active: <GoCheckCircleFill />, href: "/task" },
    { label: "Settings", icon: <RiSettings4Line />, active: <RiSettings4Fill />, href: "/settings" },
    { label: "Members", icon: <FaRegUser />, active: <FaUser />, href: "/members" },
  ];

  const workspace = [
    { title: "Workspace 1", id: "1" },
    { title: "Workspace 2", id: "2" },
    { title: "Workspace 3", id: "3" },
    { title: "Workspace with a very long title for testing purposes", id: "4" }, 
    { title: "Workspace 5", id: "5" },
  ];

  const workspaceClickHandler = ({ title, id }) => {
    setSelectedWorkspace({ title, id });
    console.log(title, id);
    navigator(`/workspace/${title}/${id}`);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed p-2 px-4 m-2 z-50 bg-gray-200 rounded-md shadow-md"
        aria-expanded={isOpen}
      >
        <IoMenuSharp size={24} />
      </button>

      <div
        className={`fixed inset-y-0 left-0 bg-gray-100 border-r p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:relative lg:w-full h-screen z-50`}
      >
        <div className="text-lg font-bold mb-6">Project Name</div>

        <div className="flex min-w-full border mb-4 justify-between hover:bg-gray-300 transition rounded-md">
          <DropdownMenu>
            <DropdownMenuTrigger
              className="w-full flex items-center flex-row justify-between px-4 py-2"
              aria-haspopup="menu"
            >
              <span className="flex-1 text-left">{selectedWorkspace?.title || "Workspaces"}</span>
              <ChevronsUpDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-300 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto py-2">
              {workspace.map(({ title, id }) => (
                <DropdownMenuItem
                  key={id}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer transition ${
                    selectedWorkspace?.id === id ? "bg-gray-200" : ""
                  }`}
                  onClick={() => workspaceClickHandler({ title, id })}
                  aria-selected={selectedWorkspace?.id === id}
                >
                  {title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="w-full">
          <Navigation data={sidebar} currentPath={location.pathname} />
        </div>
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

const Navigation = ({ data, currentPath }) => (
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

export default Sidebar;
