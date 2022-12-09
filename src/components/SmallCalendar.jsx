import React, { useEffect, useState, useContext } from "react";
import { getMonth } from "../util";
import dayjs from "dayjs";
import chevron_left from "./assets/chevron_left.png";
import chevron_right from "./assets/chevron_right.png";
import GlobalContext from "./context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonth));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }

  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM-YYYY")}
        </p>
        <button onClick={handlePrevMonth}>
          <span className="cursor-pointer text-gray-600 mx-2">
            <img
              src={chevron_left}
              alt="chevron_left"
              className="mr-2 w-10 h-10"
            />
          </span>
        </button>

        <button onClick={handleNextMonth}>
          <span className="cursor-pointer text-gray-600 mx-2">
            <img
              src={chevron_right}
              alt="chevron_left"
              className="mr-2 w-10 h-10"
            />
          </span>
        </button>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
          <span className="text-sm py-1 text-center">
            S
          </span>
          <span className="text-sm py-1 text-center">
            M
          </span>
          <span className="text-sm py-1 text-center">
            T
          </span>
          <span className="text-sm py-1 text-center">
            W
          </span>
          <span className="text-sm py-1 text-center">
            T
          </span>
          <span className="text-sm py-1 text-center">
            F
          </span>
          <span className="text-sm py-1 text-center">
            S
          </span>
      </div>
    </div>
  );
}
