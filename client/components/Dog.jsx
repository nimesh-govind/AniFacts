import React from 'react'
import { getDog } from '../api'

export default class Dog extends React.Component {
  state = {
    puppy: null
  }

  componentDidMount () {
    getDog()
      .then(doggie => {
        this.setState({
          puppy: doggie.file
        })
      })
  }

  render () {
    return (
      <>
        {this.state.puppy && <img style={{ height: '400px', width: '400px' }}
          src={this.state.puppy}/>}
      </>
    )
  }
}
