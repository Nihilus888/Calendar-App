import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./components/context/GlobalContext";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <React.Fragment>
      <EventModal />
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
