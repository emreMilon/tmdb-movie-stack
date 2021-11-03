import React, { FC } from "react";
import { TextField, Button } from "@material-ui/core";
import "../styles/Search.scss";

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onSubmit: () => void;
}

const Search: FC<Props> = ({ setSearchTerm, searchTerm, onSubmit }) => {
  return (
    <div className="input">
      <TextField
        className="text"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button className="button" variant="contained" onClick={onSubmit}>
        Search
      </Button>
    </div>
  );
};

export default Search;
