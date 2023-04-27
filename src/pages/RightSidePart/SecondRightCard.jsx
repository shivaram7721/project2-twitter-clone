import React from "react";
import secondRightCard from "./SecondRightCard.module.css"; 

export default function SecondRightCard() {
  return (
    <div className={secondRightCard.mainDiv}>
      <h1>Who to follow</h1>

      <Trending />
      <Trending />
      <Trending />
      {/* <Trending /> */}
      <a href="" className={secondRightCard.anch}>Show more</a>
    </div>
  );
}

function Trending() {

  return (
    <div className={secondRightCard.mainSecondDiv}>
      <div>
        <img className={secondRightCard.imgPic} src="https://picsum.photos/60/60?q=12" alt="" />
      </div>

      <div className={secondRightCard.userName}>
        <p>Goldberg</p>
        <div className={secondRightCard.namePart}>
          <span>@goldberg</span>
          <span>Follows you</span>
        </div>
      </div>

      <div>
        <button className={secondRightCard.btn}>Follow</button>
      </div>
    </div>
  );
}
