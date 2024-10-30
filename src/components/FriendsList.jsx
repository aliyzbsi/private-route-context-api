import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const { authUserInfo } = useContext(AuthContext);

  useEffect(() => {
    const getFriendsData = async () => {
      await axios
        .get("https://nextgen-project.onrender.com/api/s11d2/friends", {
          headers: {
            Authorization: authUserInfo.token,
          },
        })
        .then((res) => {
          setFriends(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getFriendsData();
  }, [authUserInfo.token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
