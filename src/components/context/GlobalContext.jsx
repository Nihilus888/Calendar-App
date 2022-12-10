import React from 'react'

const GlobalContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
    smallCalendarMonth: 0,
    setSmallCalenarMonth: (index) => {},
    daySelected: null,
    setDaySelected: (day) => {},
})

export default GlobalContext