import React from 'react'
import { getCat } from '../api'

export default class Cat extends React.Component {
  state = {
    kitty: null
  }

  componentDidMount () {
    getCat()
      .then(feline => {
        this.setState({
          kitty: feline.file
        })
      })
  }

  render () {
    return (
      <>

        <div class="column is-narrow has-text-centered">
          <h1 class="title is-1 has-background-light"> You chose a Cat!</h1>

          <div class="container is-flex is-horizontal-center">
            {this.state.kitty && <img style={{ height: 'auto', width: 'auto' }}
              src={this.state.kitty} />}
          </div>
        </div>
      </>
    )
  }
}
