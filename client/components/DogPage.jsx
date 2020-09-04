import Dog from './Dog'

import React from 'react'

class DogPage extends React.Component {
  state = {
    welcomeStatement: ''
  }

  render () {
    return (
      <>
        <Dog/>
      </>
    )
  }
}

export default DogPage
