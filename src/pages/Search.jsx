import { useState } from "react";
import { SearchField } from "@adobe/react-spectrum";


function Search({searchText}) {
  return (
    <>
      <SearchField label="search" onSubmit={searchText} />
    </>
  );
}

export default Search;
