import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../leaderboard-data.json";

function Leaderboard() {
  // const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   axios.get("/leaderboard-data.json").then((response) => {
  //     setPlayers(response.data.players);
  //   });
  // }, []);

  return (
    <div className=" dark:bg-gray-900 min-h-screen">
      <div className="mx-8 relative overflow-x-auto shadow-md sm:rounded-lg">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          Leaderboard
        </h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Nationality
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Born Year
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((player) => (
              <tr
                className="bg-white dark:border-gray-700 dark:bg-gray-800 text-left"
                key={player.id}
              >
                <td className="px-6">{player.id}</td>
                <td className="px-6">{player.name}</td>
                <td className="px-6">{player.nationality}</td>
                <td className="px-6">{player.rating}</td>
                <td className="px-6">{player.birthYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
