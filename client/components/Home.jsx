import React from 'react'

class Home extends React.Component {
  state = {
    welcomeStatement: ''
  }

  render () {
    return (
      <>
        <h1>Welcome</h1>
        <button><a href='#/cat'>Cats!</a></button>
      </>
    )
  }
}
export default Home
