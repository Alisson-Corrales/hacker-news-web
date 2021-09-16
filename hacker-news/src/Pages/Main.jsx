import React from "react";
import InfoSquare from "../Components/InfoSquare";
import SearchForm from "../Components/SearchForm";
import { useGlobalContext } from "../util/context";

const Main = () => {
  const { loading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <main>
      <SearchForm />
        return (
          <div className="prevFor">
            <p></p>
            <button disabled={loading} onClick={()=> handlePage('dec')}>Prev</button>
            <p id="pages">
              {page + 1} of {nbPages}
            </p>
            <button disabled={loading} onClick={()=> handlePage('inc')}>Next</button>
          </div>
        )
      <InfoSquare />
    </main>
  );
};

export default Main;
