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
        <h2>Cat Fact</h2>
        <p>{this.state.kitty}</p>
      </>
    )
  }
}
