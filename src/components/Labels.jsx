import React, { useContext } from "react";
import { updateLabel } from "typescript";
import GlobalContext from "./context/GlobalContext";

export default function Labels() {
  const {
    labels,
    updateLabel,
    title,
    // setTitle,
    cancelled,
    // setCancelled,
    // updateTitle,
  } = useContext(GlobalContext);

  const meetings = [
    'MR 6-1-1',
    'MR 6-1-2',
    'MR 6-1-3',
    'DR 9-2-1',
    'DR 9-2-3',
    'DR 9-2-4',
  ]

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
          <span className="ml-2 text-gray-700 capitalize">{meetings[idx]}</span>
        </label>
      ))}

      <p className="text-gray-500 font-bold mt-10">Confirmed Meetings:</p>
      <p className="text-green-600 mt-1 font-bold">{title}</p>

      <p className="text-gray-500 font-bold mt-10">Cancelled Meetings:</p>
      <p className="text-red-500 mt-1 font-bold">{cancelled}</p>
    </React.Fragment>
  );
}
