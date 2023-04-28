import React, { useState, useEffect } from "react";
import rightCard from "./FirstRightCard.module.css";
import SimpleDialogDemo from "./SimpleDialogDemo";

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
      <Trending limit={3} />
      {/* <a href="" className={rightCard.anch}>
        Show more
      </a> */}
    </div>
  );
}

function Trending({ limit }) {
  const [trend, setTrend] = useState([]);
  const [isError, setIsError] = useState("");

  async function handleData() {
    try {
      const res = await fetch("/trends.json");
      const data = await res.json();
      setTrend(data.slice(0, limit));
    } catch (error) {
      console.log(error);
      setIsError(error.message);
    }
  }

  useEffect(() => {
    handleData();
  }, [limit]);
  
  // function handleShowMore() {
  //   setTrend((prevTrend) => {
  //     const startIndex = prevTrend.length;
  //     const remainingTrend = trend.slice(startIndex, startIndex + 3);
  //     return [...prevTrend, ...remainingTrend];
  //   });
  // }

  return (
    <>
      {trend.map((ele, i) => (
        <div key={ele.tweet_counts}>
          <div className={rightCard.trend}>
            <span>Trending in {ele.country_name}</span>
            <span><SimpleDialogDemo/></span>
          </div>

          <h3 className={rightCard.thirdHead}> #{ele.states_name}</h3>
          <p className={rightCard.para}>{ele.tweet_counts}K Tweets</p>
        </div>
      ))}
       {trend.length < limit ? null : (
        // <button onClick={handleShowMore}>Show more</button>
        <a href="" className={rightCard.anch}>
        Show more
      </a>
      )}
    </>
  );
}
