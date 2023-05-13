import { useEffect } from "react";

/* eslint-disable react/prop-types */
const OnThisDayCard = ({ event }) => {
  return (
    <div className="min-w-full items-center py-8 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex w-3/4 mx-auto justify-between items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          {event[0].event_title}
        </h5>
        <h2 className="py-4 mb-2 text-lg text-gray-900 dark:text-gray-300">
          {event[0].event_date}
        </h2>
      </div>
      <img
        className="mb-4 object-cover w-3/4 mx-auto rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-l-lg"
        src={event[0].event_photo}
        alt=""
      />
      <div className="mb-3 w-3/4 mx-auto font-normal text-gray-700 dark:text-gray-400">
        {event[0].event_description}
      </div>
    </div>
  );
};

export default OnThisDayCard;
