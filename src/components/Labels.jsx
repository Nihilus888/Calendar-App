import React, { useContext, useEffect, useState } from "react";
import { updateLabel } from "typescript";
import GlobalContext from "./context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);
  const [title, setTitle] = useState()
  const [cancelled, setCancelled] = useState()

  useEffect(() => {
    let array = []
    const meeting = JSON.parse(localStorage.getItem('savedEvents'))
    for(let i = 0; i < meeting.length; i++) {
      if(meeting[i].confirmed === true) {
        array.push(meeting[i].title)
      }
    }
    setTitle(array)
  }, [setTitle])

  useEffect(() => {
    let array = []
    const meeting = JSON.parse(localStorage.getItem('savedEvents'))
    for(let i = 0; i < meeting.length; i++) {
      if(meeting[i].confirmed === false) {
        array.push(meeting[i].title)
      }
    }
    setCancelled(array)
  }, [setCancelled])

  console.log('title', title)
  console.log('cancelled', cancelled)


function confirmedMeeting(e) {
  let meeting = localStorage.getItem('savedEvents')
  let confirmedMeeting = JSON.parse(meeting)
  console.log(confirmedMeeting)
  for (let i = 0; i < confirmedMeeting.length; i++) {
    if (confirmedMeeting[i].confirmed === true) {
      let meetingTitle = confirmedMeeting[i].title
      console.log('meetingTitle', meetingTitle)
      setTitle(meetingTitle)
    }
  }
}

  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}

      <p className="text-gray-500 font-bold mt-10">Confirmed Meetings:</p>
      {title.map((evt, idx) => (
        <p key={idx}>{evt}</p>
      ))}

      <p className="text-gray-500 font-bold mt-10">Cancelled Meetings:</p>
      {cancelled.map((evt, idx) => (
        <p key={idx}>{evt}</p>
      ))}
      
    </React.Fragment>
  );
}
