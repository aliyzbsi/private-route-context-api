import { Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={LoginForm} />
          <PrivateRoute path="/friends" exact component={FriendsList} />
          <PrivateRoute path="/friends/add" exact component={AddFriend} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;
