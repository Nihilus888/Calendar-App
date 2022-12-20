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
    cancelled,
    updateTitle,
  } = useContext(GlobalContext);

  const meeting = new HashTable();

  meeting.set("indigo", "MR 6-6-1");
  meeting.set("gray", "MR 6-1-2");
  meeting.set("green", "MR 6-1-3");
  meeting.set("blue", "DR 9-2-1");
  meeting.set("red", "DR 9-2-3");
  meeting.set("purple", "DR 9-2-4");
  meeting.set("yellow", "OCEANUS 6-1-4");
  meeting.set("orange", "PERSEUS");
  meeting.set("zinc", "APOLLO");

  let lbl = "Indigo"
  console.log(meeting.get(lbl))

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
          <span className="ml-2 text-gray-700 capitalize">{meeting.get(lbl)}</span>
        </label>
      ))}

      <p className="text-gray-500 font-bold mt-10">Confirmed Meetings:</p>
      <p
        onChange={() => updateTitle({ title })}
        className="text-green-600 mt-1 font-bold"
      >
        {title}
      </p>

      <p className="text-gray-500 font-bold mt-10">Cancelled Meetings:</p>
      <p className="text-red-500 mt-1 font-bold">{cancelled}</p>
    </React.Fragment>
  );
}
