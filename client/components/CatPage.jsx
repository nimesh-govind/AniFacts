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
        <button><a href='#/cat'>Refresh</a></button>
        <button><a href='/'>Home</a></button>
      </>
    )
  }
}

export default CatPage
