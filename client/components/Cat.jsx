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
        {this.state.kitty && <img style={{ height: '400px', width: '400px' }}
          src={this.state.kitty}/>}
      </>
    )
  }
}
