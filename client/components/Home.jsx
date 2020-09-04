import React from 'react'

class Home extends React.Component {
  state = {
    welcomeStatement: ''
  }

  render () {
    return (
      <>
        <div className="column is-narrow has-text-centered">
          <h1 className="title is-1 has-background-danger-light">AniFacts</h1>
          <h2 className="subtitle is-3 has-background-danger-light">Choose an Animal for an AniFact!</h2>
          <div className="container is-flex is-horizontal-center">
          <figure className="image is-128x128 has-text-centered">
            <img className="is-rounded" src="./Images/cat-home-page.jpeg"/>
          </figure>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <button className="button is-dark is-primary"><a href='#/cat'>Cats!</a></button>
          
          <br></br>
          <br></br>
          <div className="container is-flex is-horizontal-center">
          <figure className="image is-128x128 has-text-centered">
            <img className="is-rounded" src="./Images/dog-home.png"/>
          </figure>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <button className="button is-dark is-primary"><a href='#'>Dog!</a></button>
        </div>
      </>
    )
  }
}
export default Home
