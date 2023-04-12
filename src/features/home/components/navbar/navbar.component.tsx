import React from "react";
import styled from "styled-components";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
type Props = {};

export function Navbar({}: Props) {
  const [show, setShow] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [iconTransform, setIconTransform] = React.useState('translate-x-0');

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleOpenSearch = () => {
    setIsSearch((prev) => !prev);
    setIconTransform(isSearch ? 'translate-x-0' : 'translate-x-full');
  };
  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div
      className={`fixed left-0 top-0 h-16 w-full ${
        show ? "bg-black" : "bg-black"
      } transition-all duration-500 ease-in`}
    >
      <div className=" flex w-full items-center justify-between px-5 py-4">
        <div className="flex items-center">
          <div className="logo-wrapper mr-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="Netflix logo "
              className="h-8 cursor-pointer object-contain"
            />
          </div>
          <ul className={`nav-menu-wrapper flex text-white`}>
            <li className={`mr-2`}>
              <Link to="/1">Homepage</Link>
            </li>
            <li className="mr-2">
              <Link to="/2">Series</Link>
            </li>
            <li className="mr-2">
              <Link to="/3">Movies</Link>
            </li>
            <li className="mr-2">
              <Link to="/4">New and Popular</Link>
            </li>
            <li className="mr-2">
              <Link to="/5">My List</Link>
            </li>
          </ul>
        </div>

        <ul className="user-wrapper item-center flex items-center">
          <li
            className={`flex h-10 w-64 items-center rounded-full bg-gray-200 transition-all duration-500 ease-in-out ${
              show
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <SearchOutlinedIcon
              className={`w-10 h-10 rounded-full bg-gray-500 text-white flex justify-center items-center ml-2 transition-all duration-500 cursor-pointer ease-in-out ${iconTransform}`}
              onClick={handleOpenSearch}
            />
            <input
              placeholder="Tìm kiếm"
              type="text"
              className="h-full w-full rounded-full px-4 text-gray-900"
            />
          </li>
          <li className="mr-2">
            <Link to="">KID</Link>
          </li>
          <li className="mr-2">
            <NotificationsRoundedIcon />
          </li>
          <li className="mr-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
              alt="User logo"
              className="h-8 cursor-pointer object-contain"
            />
          </li>
          <li className="">
            <ArrowDropDownOutlinedIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}
