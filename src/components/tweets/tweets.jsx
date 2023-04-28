import Grid from "@mui/material/Grid";
import styles from "./tweets.module.css";
import {
  BiDotsHorizontalRounded,
  BiMessageRounded
} from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePoll } from "react-icons/md";
import { CiExport } from "react-icons/ci";
import { tweetsData } from "../../atoms/atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export function Tweets() {
  const [tweets, setTweets] = useRecoilState(tweetsData);

  useEffect(() => {
    fetch("/tweets.json")
      .then((res) => res.json())
      .then((data) => setTweets(data));
  }, []);

  console.log(tweets);

  return (
    <div>
        {tweets.map((tweet) => (
          <Grid className={styles.tweetsContainer} key={tweet.id} >
            <div className={styles.tweetHead}>
              <img className={styles.profileImg} src={tweet.image} />

              <div className={styles.namePara}>
                <div className={styles.profileHead}>
                  <span className={styles.head4}>{tweet.tweetedBy.name}</span>
                  <span className={styles.mention}>@ChennaiIPL .2h</span>
                  {/* <span><BiDotsHorizontalRounded className={styles.dots}/></span> */}
                  <div>
                    <span>
                      <BiDotsHorizontalRounded className={styles.dots} />
                    </span>
                  </div>
                </div>

                <div className={styles.tweetContent}>
                  <span className={styles.content}>{tweet.content}</span>
                  <p>
                    <BiDotsHorizontalRounded className={styles.dots} />
                  </p>
                </div>
              </div>
              <div className={styles.dotsDiv}>
                <p>
                  <BiDotsHorizontalRounded className={styles.dots} />
                </p>
              </div>
            </div>

            <div className={styles.postContainer}>
              <img className={styles.postImg} src={tweet.image} />

              <div className={styles.iconsDiv}>
                <p>
                  <BiMessageRounded className={styles.count} />
                  {tweet.commentCount}
                </p>
                <p className={styles.count}>
                  <FaRetweet />
                  {tweet.reTweetsCount}
                </p>
                <p className={styles.count}>
                  <AiOutlineHeart />
                  {tweet.likeCount}
                </p>
                <p className={styles.count}>
                  <MdOutlinePoll />
                  193.2k
                </p>
                <p>
                  <CiExport />
                </p>
              </div>
            </div>
          </Grid>
        ))}
    </div>
  );
}

{
  /* <div>

{tweets.map((tweet) => (
  <Grid className={styles.gridMainContainer} key={tweet.id} container spacing={2}>

    links grid
    <Grid item xs={3} sx={{}}>
      <p style={{ border: "1px solid" }}>xs=8</p>
      
    </Grid>

    tweets grid
    <Grid className={styles.tweetsContainer} item md={6} sm={12} xs={12}>
    <div className={styles.tweetDiv}>
        <img className={styles.profileImg} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />

        <div>
          <input
            placeholder="What's happening?"
            className={styles.tweet}
          />
        </div>
      </div>

      <div className={styles.tweetIcons}>
        <div className={styles.icons}>
          <p>
            <CiImageOn />
          </p>
          <p>
            <AiOutlineFileGif />
          </p>
          <p>
            <BiPoll />
          </p>
          <p>
            <BsEmojiSmile />
          </p>
          <p>
            <AiOutlineSchedule />
          </p>
          <p>
            <GrLocation />
          </p>
        </div>

        <div className={styles.tweetBtnDiv}>
          <button className={styles.tweetBtn}>Tweet</button>
        </div>
      </div>

      <div className={styles.tweetHead}>
        <img className={styles.profileImg} src={tweet.image} />

        <div className={styles.namePara}>
          <div className={styles.profileHead}>
            <span className={styles.head4}>{tweet.tweetedBy.name}</span>
            <span className={styles.mention}>@ChennaiIPL .2h</span>
            {/* <span><BiDotsHorizontalRounded className={styles.dots}/></span> */
}
//         <div>
//           <span>
//             <BiDotsHorizontalRounded className={styles.dots} />
//           </span>
//         </div>
//       </div>

//       <div className={styles.tweetContent}>
//         <span className={styles.content}>{tweet.content}</span>
//         <p><BiDotsHorizontalRounded className={styles.dots}/></p>
//       </div>
//     </div>
//     <div className={styles.dotsDiv}>
//   <p><BiDotsHorizontalRounded className={styles.dots}/></p>
//   </div>
//   </div>

//   <div className={styles.postContainer}>
//     <img className={styles.postImg} src={tweet.image} />

//     <div className={styles.iconsDiv}>
//       <p>
//         <BiMessageRounded className={styles.count} />
//         {tweet.commentCount}
//       </p>
//       <p className={styles.count}>
//         <FaRetweet />
//         {tweet.reTweetsCount}
//       </p>
//       <p className={styles.count}>
//         <AiOutlineHeart />
//         {tweet.likeCount}
//       </p>
//       <p className={styles.count}>
//         <MdOutlinePoll />
//         193.2k
//       </p>
//       <p>
//         <CiExport />
//       </p>
//     </div>
//   </div>
// </Grid>

// right sidebar grid
//     <Grid item xs={3}>
//       <Item>xs=4</Item>
//       <p style={{ border: "1px solid" }}>xs=8</p>
//     </Grid>
//   </Grid>
// ))}
// </div> */}
