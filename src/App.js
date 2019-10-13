import React, { Component, Fragment } from 'react'
import HKLayout from './components/HKLayout'

import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import News from './pages/News'
import My from './pages/My'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Router>
            <Route path='/' exact render={ () => <HKLayout><Home /></HKLayout>}></Route>
            <Route path='/List' exact render={ () => <HKLayout><List /></HKLayout>}></Route>
            <Route path='/News' exact render={ () => <HKLayout><News /></HKLayout>}></Route>
            <Route path='/My' exact render={ () => <HKLayout><My /></HKLayout>}></Route>
          </Router>
        </div>
      </Fragment>
    )
  }
}

