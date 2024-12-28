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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const name = 'Paras Garg';
  const email = "parasgarg404@gmail.com";

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 dark:text-white w-full">
      <div className="lg:text-lg sm:text-sm font-semibold flex lg:w-2/6 sm:4/6 lg:justify-around sm:justify-start items-start">
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="mr-4 px-2 py-1 text-sm lg:px-4 lg:py-2 lg:text-base"
            >
              Create Workspace
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create new Workspace</DialogTitle>
              <DialogDescription>
                <input 
                  type="text" 
                  placeholder="Enter Workspace Title"
                  className="w-full px-4 py-2 mt-2 rounded-md border outline-none border-gray-300 dark:bg-gray-800 dark:text-white"
                />
                <div className="flex justify-between mt-4 space-x-4">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 w-full" onClick={() => console.log("Workspace Created")}>Create</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="px-2 py-1 text-sm lg:px-4 lg:py-2 lg:text-base"
            >
              Join Workspace
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Join Workspace Using Invite Code</DialogTitle>
              <DialogDescription>
                <input 
                  type="text"
                  placeholder="Enter Invite Code"
                  className="w-full px-4 py-2 mt-2 rounded-md border outline-none border-gray-300 dark:bg-gray-800 dark:text-white"
                />
                <div className="flex justify-between mt-4 space-x-4">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 w-full" onClick={() => console.log("Joined Workspace")}>Join</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex justify-end space-x-4 lg:w-4/6 sm:2/6 pr-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="p-0"
            >
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
              className="flex items-center px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md"
            >
              <IoIosLogOut className="mr-2" /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
