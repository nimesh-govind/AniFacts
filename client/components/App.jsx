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
      <div class="column is-narrow has-text-centered">
        <h1 class="title is-1 has-background-light">Random Cat Picture and Fact Generator</h1>
        </div>
      
      <Cat/>
      <CatFacts/>
      </>
    )
  }
}
export default App
