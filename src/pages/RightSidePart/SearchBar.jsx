import React from "react";
import searchBox from "./SearchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div >
      <input className={searchBox.mainDiv}
      type="search" placeholder=" 🔍 Search Twitter" />
    </div>
  );
}
