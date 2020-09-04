import React from 'react'

import CatPage from './CatPage'
import { Route } from 'react-router-dom'
import Home from './Home'
import DogPage from './DogPage'

class App extends React.Component {
  render () {
    return (
      <>
        <Route exact path='/cat' component={CatPage} />
        <Route exact path='/' component={Home}/>
        <Route exact path='/dog' component={DogPage}/>
      </>
    )
  }
}
export default App
