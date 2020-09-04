import React from 'react'
import { getDogFact } from '../api'

export default class CatFacts extends React.Component {
  state = {
    puppy: null
  }

  componentDidMount () {
    getDogFact()
      .then(doggie => {
        this.setState({
          puppy: doggie
        })
      })
  }

  render () {
    return (
      <>
        <h2>Dog Fact</h2>
        <p>{this.state.puppy}</p>
      </>
    )
  }
}
