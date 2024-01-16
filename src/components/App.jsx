import "./App.css";
import user from "../userData.json";
import friends from "../friendList.json";
import transactions from "../transactions.json";
import { Profile } from "./profile/Profile";
import { FriendList } from "./friendsList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
