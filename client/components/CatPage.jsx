import Cat from './Cat'
import CatFacts from './CatFacts'
import React from 'react'

class CatPage extends React.Component {
  state = {
    welcomeStatement: ''
  }

  handleRefresh = () => {
    this.setState({})
  }

  render () {
    return (
      <>
        <Cat/>
        <CatFacts/>
        <button onClick={this.handleRefresh}>Refresh</button>
        <button><a href='/'>Home</a></button>
      </>
    )
  }
}

export default CatPage
