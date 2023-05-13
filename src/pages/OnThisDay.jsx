/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../on-this-day-data.json";
import OnThisDayCard from "../components/cards/OnThisDayCard";

function OnThisDay() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  const onThisDayEvent = data.filter((event) => {
    const eventDateParts = event.event_date.split("-");
    const eventDay = parseInt(eventDateParts[0]);
    const eventMonth = parseInt(eventDateParts[1]);
    return eventMonth === currentMonth && eventDay === currentDay;
  });
  // const [players, setPlayers] = useState([]);
  // useEffect(() => {
  //   axios.get("/leaderboard-data.json").then((response) => {
  //     setPlayers(response.data.players);
  //   });
  // }, []);

  useEffect(() => {
    console.log(currentDay);
    console.log(currentMonth);
  }, [])

  return (
    <div className="w-full dark:bg-gray-900 py-12 min-h-screen">
      <div className="w-2/3 mx-auto">
        <OnThisDayCard
          className=""
          key={onThisDayEvent.event_id}
          event={onThisDayEvent}
        />
        ;
      </div>
    </div>
  );
}

export default OnThisDay;
