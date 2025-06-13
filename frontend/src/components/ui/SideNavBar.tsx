import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import Menu from "@mui/icons-material/Menu";
import Divider from "@mui/joy/Divider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";

type SideNavBarProps = {
  onItemClick?: (item: string) => void;
};

type SidebarItem = {
  key: string;
  label: string;
  path: string;
};


const workbarItems: SidebarItem[] = [
  {
    key: "works",
    label: "Works",
    path: "ri-archive-drawer-line text-[32px]",
  },
  {
    key: "tools",
    label: "Tools",
    path: "ri-tools-fill text-[32px]",
  },
  {
    key: "staff",
    label: "Staff",
    path: "ri-bookmark-3-line text-[32px]",
  },
];

const settingBarItems: SidebarItem[] = [
  {
    key: "profile",
    label: "Profile",
    path: "ri-user-3-line text-[32px]",
  },
  {
    key: "setting",
    label: "Setting",
    path: "ri-settings-3-line text-[32px]", // shortened
  },
];

const handleLogout = () => {
  localStorage.removeItem("accessToken");
  window.location.href = "/login"; // Redirect to login page
};



function SideNavBar({ onItemClick }: SideNavBarProps) {

  return (
    <div className="h-full w-fit bg-transparent flex flex-col items-center pl-4 pt-4 pb-4">
      <aside className="flex flex-col items-center bg-white text-black shadow h-full rounded-xl">
        <div className="h-16 flex items-center w-full">
          <a className="h-6 w-6 mx-auto" href="http://svelte.dev/">
          </a>
        </div>

        <div className="flex-grow">
          <ul>
            {workbarItems.map((item) => (
              <li onClick={() => onItemClick?.(item.key)}
                className="h-15 w-15 p-4 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all"
                key={item.key}
              >
                <i className={item.path}></i>
              </li>
            ))}
          </ul>
        </div>

        <Divider/>

        <ul>
          {settingBarItems.map((item) => (
            <li
              onClick={() => onItemClick?.(item.key)}
              className="h-15 w-15 p-4 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-all"
              key={item.key}
            >
              <i className={item.path}></i>
            </li>
          ))}
        </ul>

        <div className="mt-auto h-16 flex items-center w-full">
          <button
            onClick={handleLogout}
            className="h-16 w-10 mx-auto flex flex justify-center items-center
				    w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
          >
            <svg
              className="h-5 w-5 text-red-700"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </aside>
    </div>
  );
}

export default SideNavBar;
