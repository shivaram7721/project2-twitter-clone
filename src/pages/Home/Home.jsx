// import { getUsers } from "../../utils/localStorage";

import FirstRightCard from "../RightSidePart/FirstRightCard";
import SecondRightCard from "../RightSidePart/SecondRightCard";

export function Home() {
  return (
    <div>
      <h1>Home page</h1>

      <div style={{marginLeft:"70%"}}>
        <div style={{maxHeight:"100rem"}}>
        <FirstRightCard />
        <SecondRightCard/>
        </div>
      </div>

    </div>
  );
}
