// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  oSubscribe = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return (
        <button className="button" type="button" onClick={this.OnSubscribe}>
          {isSubscribe}
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.OnSubscribe}>
        {isSubscribe}
      </button>
    )
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="des">Thank you!Happy Learning</p>
        {/*  <button className="button" type="button" onClick={this.OnSubscribe}>
          {buttonText}
        </button> */}

        {this.getButtonText()}
      </div>
    )
  }
}

export default Welcome
