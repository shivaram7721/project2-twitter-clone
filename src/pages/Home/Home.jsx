// import { getUsers } from "../../utils/localStorage";
import { Tweets } from "../../components/tweets/tweets";
import { Footer } from "../../components/footer/footer";
import { TweetArea } from "../../components/tweetArea/tweetArea";
import { Grid } from "@mui/material";

export function Home() {

    return (
        <div>
            <Grid container>
                <Grid md={3} xs={1}>

                </Grid>

                <Grid md={6} xs={11}>
                    <TweetArea />
                    <Tweets />
                </Grid>

                <Grid md={3}>

                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}