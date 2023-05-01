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
import { TabsArea } from "../../components/tabsArea/tabsArea";
import { getUsers } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { Logout } from "../../components/logout/logout";

export function Home() {

  const navigate = useNavigate()


// const users = getUsers();

// const isLogin = users.some( (user)=> (
//   user.isLogin === true || user.isLogin === null
// ))

// console.log(isLogin)

useEffect( ()=> (
  navigate('/login')
))

const isLogin = localStorage.getItem("isLogin");
console.log(isLogin)


  return (
    <div>
      
      {
        isLogin ? (
          <div>
            <Grid container>
        <Grid item md={2.5} sm={2} >
          <Sidebar />
          {/* <Logout /> */}
        </Grid>

        <Grid item md={6} sm={10} xs={12}>
          <TabsArea />
          {/* <FormDialog /> */}
          {/* <TweetArea />
          <Tweets /> */}
        </Grid>

        <Grid className={homepage.rightsideBar} item md={3.5}>
          <SearchBar />
          <div className={homepage.sideCards}>
          <FirstRightCard />
          <SecondRightCard />
          </div>
        </Grid>
      </Grid>
      {/* <Footer /> */}
          </div>
        ) : navigate('/login')
      }
      
    </div>
  );
}

