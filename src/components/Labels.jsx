import React, { useContext } from "react";
import { updateLabel } from "typescript";
import GlobalContext from "./context/GlobalContext";

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

export default function Labels() {
  const {
    labels,
    updateLabel,
    title,
    setTitle,
    cancelled,
    setCancelled,
    updateTitle,
  } = useContext(GlobalContext);

  const meeting = new HashTable();

  meeting.set("Indigo", "MR 6-6-1")
  meeting.set("Gray", "MR 6-1-2")
  meeting.set("Green", "MR 6-1-3")
  meeting.set("Blue", "DR 9-2-1")
  meeting.set("Red", "DR 9-2-3")
  meeting.set("Purple", "DR 9-2-4")
  meeting.set("Yellow", "OCEANUS 6-1-4")
  meeting.set("Orange", "PERSEUS")
  meeting.set("Zinc", "APOLLO")

  console.log(meeting.get("Zinc"))

  console.log(meeting.display())

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
      <p 
      onChange={() => updateTitle({title})}
      className="text-green-600 mt-1 font-bold">{title}</p>

      <p className="text-gray-500 font-bold mt-10">Cancelled Meetings:</p>
      <p className="text-red-500 mt-1 font-bold">{cancelled}</p>
    </React.Fragment>
  );
}
