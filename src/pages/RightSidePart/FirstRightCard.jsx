import React from "react";
import rightCard from "./FirstRightCard.module.css";

export default function FirstRightCard() {
  return (
    <div className={rightCard.mainDiv}>
      <h1>What's happening</h1>

      <div className={rightCard.firstDiv}>
        <div>
          <span>NBA - 42 minutes ago</span>
          <br />
          <h3 className={rightCard.headThree}>Warriors at Kings</h3>
        </div>

        <div>
          <img
            src="https://picsum.photos/80/80?q=12"
            alt=""
            className={rightCard.imgPic}
          />
        </div>
      </div>
      <Trending/>
      <Trending/>
      <Trending/>
      {/* <Trending/> */}
      <a href="" className={rightCard.anch}>Show more</a>
    </div>
  );
}

function Trending() {
  return (
    <div>
      <div className={rightCard.trend} 
      // style={{display:"flex", justifyContent:"space-between"}}
      >
        <span>Trending in India</span>
        <span>...</span>
      </div>

      <h3 className={rightCard.thirdHead}>#WhatsApp</h3>
      <p className={rightCard.para}>10.9K Tweets</p>

    </div>
  );
}
