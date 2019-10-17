import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Player from "./components/Player"
import AllPlayers from "./components/AllPlayers"
import AllTeams from "./components/AllTeams"
import Login from "./components/Login"

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route
              exact
              path='/team/:teamId/player/:playerId'
              component={Player}
            />
            <Route exact path='/team/:teamId' component={AllPlayers} />
            <Route exact path='/' component={AllTeams} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
