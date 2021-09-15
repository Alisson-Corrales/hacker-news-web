import React from "react";
import InfoSquare from "../Components/InfoSquare";
import SearchFor from "../Components/SearchFor";

const main = () => {
  return (
    <main>
      <SearchFor />
      <div className="prevFor">
        <button>Prev</button>
        <p>1 of 50</p>
        <button>Next</button>
      </div>
      <InfoSquare />
    </main>
  );
};

export default main;
