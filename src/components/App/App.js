import React from 'react'
import './App.css'
import Landing from '../Landing'
import { Switch, Route } from 'react-router'
import Intranet from '../Intranet'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/intranet" component={Intranet} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  )
}

export default App
