/* eslint-disable no-unused-vars */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Modal } from "antd";
import { AiFillHome } from "react-icons/ai";
import { BsFillPuzzleFill } from "react-icons/bs";
import {  MdLeaderboard} from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";

const Sidebar = () => {
  const nav = useNavigate();
  let location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const to = (address) => {
    setOpen(false);
    nav(`/${address}`);
  };

  const logout = () => {};

  return (
    <div>
      <Menu
        left
        isOpen={isOpen}
        onOpen={() => setOpen(!isOpen)}
        onClose={() => setOpen(!isOpen)}
      >
        <div
          onClick={() => to("home")}
          className="cursor-pointer menu-item flex items-center"
        >
          <AiFillHome className="text-xl inline-block mr-8" />
          Home
        </div>
        <div onClick={() => to("puzzle")} className="cursor-pointer menu-item">
          <BsFillPuzzleFill className="text-xl inline-block mr-8" />
          Puzzle
        </div>
        <div
          onClick={() => to("leaderboard")}
          className="cursor-pointer menu-item"
        >
          <MdLeaderboard className="text-xl inline-block mr-8" />
          Leaderboard
        </div>
        <div onClick={() => to("article")} className="cursor-pointer menu-item">
          <BiNews className="text-xl inline-block mr-8" />
          Articles
        </div>
        <div
          onClick={() => to("onThisDay")}
          className="cursor-pointer menu-item"
        >
          <AiOutlineClockCircle className="text-xl inline-block mr-8" />
          On This Day
        </div>
        <div onClick={() => to("profile")} className="cursor-pointer menu-item">
          <CgProfile className="text-xl inline-block mr-8" />
          Profile
        </div>
        {isLoggedIn ? (
          <li>
            <div
              onClick={() => {
                setModal2Open(true);
                setOpen(false);
              }}
              className="menu-item"
            >
              Logout
            </div>
          </li>
        ) : (
          <li>
            <div
              onClick={() => to("login")}
              className="cursor-pointer menu-item"
            >
              <BiLogIn className="text-xl inline-block mr-8" />
              Login
            </div>
          </li>
        )}
        <Modal
          title="Confirmation"
          style={{ top: 350 }}
          open={modal2Open}
          okText={"Log out"}
          onOk={logout}
          onCancel={() => setModal2Open(false)}
        >
          <div>Are you sure you want to log out?</div>
        </Modal>
      </Menu>
    </div>
  );
};

export default Sidebar;
