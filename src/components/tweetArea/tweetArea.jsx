import { BiPoll } from "react-icons/bi";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import styles from "./tweetArea.module.css";

export function TweetArea() {
  return (
    <div className={styles.tweetAreaContainer}>
      <div className={styles.tweetDiv}>
        <img
          className={styles.profileImg}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
        />

        <div>
          <input placeholder="What's happening?" className={styles.tweet} />
          {/* <textarea cols="68" rows="5" style={{backgroundColor:"black"}}></textarea> */}
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
    </div>
  );
}
