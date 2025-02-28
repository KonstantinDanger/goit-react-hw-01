import friends from "../../data/friends.json";
import userData from "../../data/userData.json";
import transactions from "../../data/transactions.json";

import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <h1></h1>

      <FriendList friends={friends}></FriendList>

      <h1></h1>

      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
}

export default App;
