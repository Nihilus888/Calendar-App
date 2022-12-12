import React, { useContext } from "react";
import { updateLabel } from "typescript";
import GlobalContext from "./context/GlobalContext";

export default function Labels() {
    const { labels, updateLabel } = useContext(GlobalContext);
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">
        {labels.map(({label: lbl, checked}, idx) =>(
            <label key={idx} className="items-center mt-3 block">
                <input type="checkbox" 
                onChange={() =>
                    updateLabel({ label: lbl, checked: !checked })
                  }
                checked={checked} 
                className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}/>
                <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
            </label>
        ))}
      </p>
    </React.Fragment>
  );
}
