import React from "react";
import searchBox from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div style={{position:"sticky", top:"0.5em"}}>
      <input
        className={searchBox.mainDiv}
        type="search"
        placeholder=" 🔍 Search Twitter"
      />
    </div>
  );
}
