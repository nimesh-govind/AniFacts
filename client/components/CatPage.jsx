import Cat from './Cat'
import CatFacts from './CatFacts'
import React from 'react'

class CatPage extends React.Component {
  state = {
    newCat: ''
  }

  render () {
    return (
      <>
        <Cat/>
        <CatFacts/>
        <div className="column is-narrow has-text-centered">
        <button class="button is-dark is-primary" onClick={() => window.location.reload(false)}>Next Cat</button>
        <br></br>
        <br></br>
        <button class="button is-dark is-primary"><a href='/'>Return to Animals</a></button>
        </div>
        
      </>
    )
  }
}

export default CatPage
