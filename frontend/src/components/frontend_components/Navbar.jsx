import React from 'react';
import Avatar from 'react-avatar';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const name = 'Paras Garg';
  const email = "parasgarg404@gmail.com";

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 dark:text-white m-2">
      <div className="text-lg font-semibold">Home</div>
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="p-0">
              <Avatar name={name} round={true} size="40" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60 p-4 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
            <div className="flex flex-col items-center space-y-2">
              <Avatar name={name} round={true} size="80" />
              <DropdownMenuLabel className="font-bold text-center truncate">{name}</DropdownMenuLabel>
              <DropdownMenuLabel className="text-sm text-gray-500 dark:text-gray-300 truncate">{email}</DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem 
              onClick={handleLogout} 
              className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md">
              <IoIosLogOut className="mr-2" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
