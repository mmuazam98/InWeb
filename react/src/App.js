import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Home, Poll, Navigation, Discover, SinglePoll, Profile, User, Footer } from "./components";
function App() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("id")));
  console.log(loggedIn);

  return (
    <div className="App">
      <Router>
        {!loggedIn ? <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> : <Navigation setLoggedIn={setLoggedIn} />}
        <Switch>
          <Route path="/" exact>
            {loggedIn ? (
              <>
                <Home /> <Footer />
              </>
            ) : null}
          </Route>
          <Route path="/create" exact>
            {loggedIn ? <Poll setLoggedIn={setLoggedIn} /> : null}
          </Route>
          <Route path="/discover" exact>
            {loggedIn ? <Discover setLoggedIn={setLoggedIn} /> : null}
          </Route>
          <Route path="/poll/:id" exact>
            {loggedIn ? <SinglePoll /> : null}
          </Route>
          <Route path="/users/me" exact>
            {loggedIn ? <Profile /> : null}
          </Route>
          <Route path="/users/:id" exact>
            {loggedIn ? <User /> : null}
          </Route>
        </Switch>
        <div className="my-5"></div>
      </Router>
    </div>
  );
}

export default App;
