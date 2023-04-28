import React, { useState, useEffect } from "react";
import secondRightCard from "./SecondRightCard.module.css";

export default function SecondRightCard() {
  return (
    <div className={secondRightCard.mainDiv}>
      <h1>Who to follow</h1>

      <Trending limit={3} />
      {/* <a href="" className={secondRightCard.anch}>
        Show more
      </a> */}
    </div>
  );
}

function Trending({ limit }) {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState("");

  async function handleData() {
    try {
      const res = await fetch("/users.json");
      const data = await res.json();
      setUsers(data.slice(0, limit));
    } catch (error) {
      console.log(error);
      setIsError(error.message);
    }
  }

  useEffect(() => {
    handleData();
  }, [limit]);

  function handleShowMore() {
    setUsers((prevUsers) => {
      const startIndex = prevUsers.length;
      const remainingUsers = users.slice(startIndex, startIndex + 3);
      return [...prevUsers, ...remainingUsers];
    });
  }

//   const images = new Array(100).fill(0).map((x, index)=>{
//     return `https://randomuser.me/api/portraits/men/${index}.jpg`
//   })
  return (
    <div>
      {users.map((user) => (
        <div className={secondRightCard.mainSecondDiv} key={user.id}>
          <div>
            <img
              className={secondRightCard.imgPic}
              src="https://picsum.photos/60/60?q=12"
              alt=""
            />
          </div>

          <div className={secondRightCard.userName}>
            <p>
              {user.first_name} {user.last_name} 
            </p>
            <div className={secondRightCard.namePart}>
              <span>@{user.user_name}</span>
              <span>Follows you</span>
            </div>
          </div>

          <div>
            <button className={secondRightCard.btn}>Follow</button>
          </div>
        </div>
      ))}

      {users.length < limit ? null : (
        // <button onClick={handleShowMore}>Show more</button>
        <a href="" onClick={handleShowMore} className={secondRightCard.anch}>
        Show more
      </a>
      )}
    </div>
  );
}
