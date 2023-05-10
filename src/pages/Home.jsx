/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="flex bg-gray-600 w-full min-h-screen">
      <Sidebar className="" />

      <div className="main-content flex flex-col justify-center">
        <div className="text-white text-5xl">Welcome to the Chess Web App</div>
        <div className="text-white text-xl">
          Here you can find a variety of chess-related content and resources.
          <br />
          Choose from the options in the sidebar to explore.
        </div>
      </div>
    </div>
  );
}

export default Home;
