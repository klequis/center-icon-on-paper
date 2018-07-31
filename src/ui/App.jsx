import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// User
import withRoot from './withRoot'
import CenterInPaper from './CenterInPaper'
class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Fragment>
        <Route exact path='/' component={CenterInPaper} />
        </Fragment>
      </Router>
    )
  }
}


export default withRoot(App)
