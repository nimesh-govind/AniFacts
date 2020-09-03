import React from 'react'

import CatPage from './CatPage'
import { Route } from 'react-router-dom'

class App extends React.Component {
  state = {
  }

  render () {
    return (
      <>
        <Route exact path='/cat' component={CatPage} />
      </>
    )
  }
}
export default App
