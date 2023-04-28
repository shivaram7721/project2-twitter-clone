// import { getUsers } from "../../utils/localStorage";
import homepage from "./Home.module.css"

import FirstRightCard from "../RightSidePart/FirstRightCard";
import SearchBar from "../RightSidePart/SearchBar";
import SecondRightCard from "../RightSidePart/SecondRightCard";
import SimpleDialogDemo from "../RightSidePart/SimpleDialogDemo";

export function Home() {
  return (
    <div>
      {/* <h1>Home page</h1> */}

      <div className={homepage.rightPart}>
        <div > 
          <SearchBar />
          <FirstRightCard />
          <SecondRightCard />
        </div>
        {/* <SimpleDialogDemo/> */}
      </div>
    </div>
  );
}
