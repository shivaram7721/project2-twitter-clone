import Grid from "@mui/material/Grid";
import styles from "./tweets.module.css";
import {BiDotsHorizontalRounded, BiMessageRounded, BiPoll} from 'react-icons/bi'
import {FaRetweet} from 'react-icons/fa'
import {AiOutlineHeart, AiOutlineFileGif, AiOutlineSchedule} from 'react-icons/ai'
import {MdOutlinePoll} from 'react-icons/md'
import {CiExport, CiImageOn} from 'react-icons/ci'
import {BsEmojiSmile} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'

export function Tweets() {

  

  return (
    <div>
      <Grid className={styles.gridMainContainer} container spacing={2}>
        <Grid item xs={3}>
          <p style={{ border: "1px solid" }}>xs=8</p>
        </Grid>

        <Grid className={styles.tweetsContainer} item xs={6}>


        <div className={styles.tweetDiv}>
        <img className={styles.profileImg} src="https://m.media-amazon.com/images/I/513mh5xOQmL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />

        <div>
        <input placeholder="What's happening?" className={styles.tweet} />
        </div>

        
        </div>

        <div className={styles.tweetIcons}>
        <div className={styles.icons}>
            <p><CiImageOn /></p>
            <p><AiOutlineFileGif /></p>
            <p><BiPoll /></p>
            <p><BsEmojiSmile /></p>
            <p><AiOutlineSchedule /></p>
            <p><GrLocation /></p>
        </div>

        <div className={styles.tweetBtnDiv}>
            <button className={styles.tweetBtn}>Tweet</button>
        </div>
        </div>



          <div className={styles.tweetHead}>
            <img
              className={styles.profileImg}
              src="https://m.media-amazon.com/images/I/513mh5xOQmL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
            />

            <div className={styles.namePara}>
              <div className={styles.profileHead}>
                <span className={styles.head4}>Chennai Super Kings</span>
                <span className={styles.mention}>@ChennaiIPL .2h</span>
              </div>

              <div>
                <span>🫡🫡</span>
              </div>
            

              
            </div>
            <div className={styles.dotsDiv}>
            <p><BiDotsHorizontalRounded className={styles.dots}/></p>
            </div>
            
          </div>

          <div className={styles.postContainer}>
             <img className={styles.postImg} src="https://images.news18.com/ibnlive/uploads/2023/04/collage-maker-24-apr-2023-06-31-pm-6385-16823413113x2.jpg?impolicy=website&width=510&height=356"/>


             <div className={styles.iconsDiv}>
            <BiMessageRounded /><span className={styles.count}>195</span>
            <FaRetweet /><span className={styles.count}>96</span>
            <AiOutlineHeart /><span className={styles.count}>4,849</span>
            <MdOutlinePoll /><span className={styles.count}>193.2k</span>
            <span><CiExport /></span>
          </div>
          </div>

          
          
        </Grid>

        <Grid item xs={3}>
          {/* <Item>xs=4</Item> */}
          <p style={{ border: "1px solid" }}>xs=8</p>
        </Grid>
      </Grid>
    </div>
  );
}
