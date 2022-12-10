import React from "react";

export default function EventModal() {
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 flex justify-between items-center">
          <span className="text-gray-400">drag_handle</span>
          <button>
            <span className="text-gray-400">close</span>
          </button>
        </header>
      </form>
    </div>
  );
}
