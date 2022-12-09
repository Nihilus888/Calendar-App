import React, {useContext} from 'react'
import logo from './assets/Calendar.jpg'
import GlobalContext from './context/GlobalContext'
import dayjs from 'dayjs'
import chevron_left from './assets/chevron_left.png'
import chevron_right from './assets/chevron_right.png'

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1)
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1)
  }

  function handleReset() {
    setMonthIndex(dayjs().month())
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="mr-2 w-15 h-12" />
      <h1 className='mr-10 text-xl text-gray-500 font-bold'> Calendar </h1>

      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">Today</button>

      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          <img src={chevron_left} alt="chevron_left" className="mr-2 w-15 h-14" />
        </span>
      </button>

      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
        <img src={chevron_right} alt="chevron_right" className="mr-2 w-15 h-12" />
        </span>
      </button>
    <h2 className="ml-4 text-xl text-gray-500 font-bold">
      {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM-YYYY")}
    </h2>
    </header>
  )
}
