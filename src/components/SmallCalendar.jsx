import React, { useEffect, useState, useContext } from "react";
import { getMonth } from "../util";
import dayjs from "dayjs";
import chevron_left from "./assets/chevron_left.png";
import chevron_right from "./assets/chevron_right.png";
import GlobalContext from "./context/GlobalContext";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
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

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);

    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay){
      return "bg-blue-100 rounded-full text-blue-600 font-bold"
    } else {
        return "";
    }
  }

  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM-YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-gray-600 mx-2">
              <img
                src={chevron_left}
                alt="chevron_left"
                className="mr-2 w-7 h-7"
              />
            </span>
          </button>

          <button onClick={handleNextMonth}>
            <span className="cursor-pointer text-gray-600 mx-2">
              <img
                src={chevron_right}
                alt="chevron_left"
                className="mr-2 w-7 h-7"
              />
            </span>
          </button>
        </div>

      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("dd").charAt(0)}
          </span>
        ))}

        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button key={idx} 
              onClick={() => {
                setSmallCalendarMonth(currentMonthIdx)
                setDaySelected(day)
              }}
              className={`py-1 w-full ${getDayClass(day)}`
              }>
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
