import React from 'react'
import { getCatFact } from '../api'

export default class CatFacts extends React.Component {
  state = {
    kitty: null
  }

  componentDidMount () {
    getCatFact()
      .then(feline => {
        this.setState({
          kitty: feline
        })
      })
  }

  render () {
    return (
      <>
      <div class="column is-narrow has-text-centered">
        <div class="container is-fluid">
        <h2 class="subtitle is-1 has-background-light">Heres your Cat Fact!</h2>
        <p class="subtitle is-2 has-text-primary-dark has-background-light">{this.state.kitty}</p>
        <button class="button is-dark is-primary"><h3>Return to Animals</h3></button>
        </div>
        </div>
      </>
    )
  }
}
