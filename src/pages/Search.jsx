import { useState } from "react";
import { SearchField } from "@adobe/react-spectrum";
import { searchUser } from "../services/search.service";

function Search() {
  const [submittedText, setSubmittedText] = useState();

  const searchUsersList = (e) => {
    setSubmittedText(e);
    searchUser(submittedText);
  };

  return (
    <>
      <SearchField label="search" onSubmit={searchUsersList} />
    </>
  );
}

export default Search;
