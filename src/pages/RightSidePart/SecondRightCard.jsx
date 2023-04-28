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
      const res = await fetch("/rightUser.json");
      const data = await res.json();
      const usersWithFollowState = data.slice(0, limit).map(user => ({
        ...user,
        isFollowed: false
      }));
      setUsers(usersWithFollowState);
    } catch (error) {
      console.log(error);
      setIsError(error.message);
    }
  }

  useEffect(() => {
    handleData();
  }, [limit]);

  const handleFollow = (user) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((prevUser) => {
        if (prevUser.id === user.id) {
          return {
            ...prevUser,
            isFollowed: !prevUser.isFollowed,
          };
        }
        return prevUser;
      });
      return updatedUsers;
    });
  };

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
            <button
              onClick={() => handleFollow(user)}
              className={secondRightCard.btn}
            >
              {user.isFollowed ? "Followed" : "Follow"}
            </button>
          </div>
        </div>
      ))}

      {users.length < limit ? null : (
        <a href="" className={secondRightCard.anch}>
          Show more
        </a>
      )}
    </div>
  );
}
