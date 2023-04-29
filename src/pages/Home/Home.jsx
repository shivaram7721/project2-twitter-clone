// import { getUsers } from "../../utils/localStorage";

import { Tweets } from "../../components/tweets/tweets";
import { Footer } from "../../components/footer/footer";
import { TweetArea } from "../../components/tweetArea/tweetArea";
import { Grid } from "@mui/material";

import homepage from "./Home.module.css";

import FirstRightCard from "../RightSidePart/FirstRightCard";
import SearchBar from "../RightSidePart/SearchBar";
import SecondRightCard from "../RightSidePart/SecondRightCard";
import Sidebar from "../Sidebar/Sidebar";

export function Home() {
  return (
    <div>
      <Grid container>
        <Grid item md={2.5} xs={1} className={homepage.rightPart}>
          <Sidebar />
        </Grid>

        <Grid item md={6} xs={11}>
          <TweetArea />
          <Tweets />
        </Grid>

        <Grid item md={3.5} className={homepage.rightPart}>
          <SearchBar />
          <FirstRightCard />
          <SecondRightCard />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}
