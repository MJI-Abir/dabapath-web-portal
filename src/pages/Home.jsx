/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

function Home() {
  return (
    <div className="flex dark:bg-gray-900 w-full min-h-screen">

      <div className="min-w-full main-content flex flex-col justify-center">
        <div className=" text-center text-white text-5xl">Welcome to the Chess Web App</div>
        <div className="text-center text-white text-xl">
          Here you can find a variety of chess-related content and resources.
          <br />
          Choose from the options in the sidebar to explore.
        </div>
      </div>
    </div>
  );
}

export default Home;
