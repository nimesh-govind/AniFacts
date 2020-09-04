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
      <div className="column is-narrow has-text-centered">
        <div className="container is-fluid">
          <h3 className="subtitle is-1 has-background-danger-light">Heres your Cat Fact!</h3>
          <p className="subtitle is-2 has-text-primary-dark has-background-danger-light">{this.state.kitty}</p>
        </div>
      </div>
      </>
    )
  }
}
