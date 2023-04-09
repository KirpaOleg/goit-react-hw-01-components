import Profile from "./Profile/Profile";
import user from './Datafiles/user.json';
import Statistics from "./Statistics/Statistics";
import data from './Datafiles/data.json';
import FriendList from './Friends/Friends'
import friends from './Datafiles/friends.json'
import TransactionHistory from "./Transactions/Transaction";
import transactions from './Datafiles/transactions.json';  


const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics title={"Upload stats"} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

