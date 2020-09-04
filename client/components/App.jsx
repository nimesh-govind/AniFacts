import React from 'react'
import Cat from './Cat'
import CatFacts from './CatFacts'

class App extends React.Component {
  state = {
    welcomeStatement: ''
  }

  render () {
    return (
      <>
      <Cat/>
      <CatFacts/>
      </>
    )
  }
}
export default App
