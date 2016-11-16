
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Chat from './Chat.jsx'
import PartyChooser from './PartyChooser.jsx'
import WaitingRoom from './WaitingRoom.jsx'

// Fron

var App = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={PartyChooser}></Route>
      <Route path="/chat/:party/:localUser/:remoteUser" component={Chat}></Route>
      <Route path="/waiting/:party/:localUser" component={WaitingRoom}></Route>
    </Router>
  </div>
)

render(<App />, document.getElementById('app'));
