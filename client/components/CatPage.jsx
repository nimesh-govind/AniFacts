import Cat from './Cat'
import CatFacts from './CatFacts'
import React from 'react'

class CatPage extends React.Component {
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

export default CatPage
