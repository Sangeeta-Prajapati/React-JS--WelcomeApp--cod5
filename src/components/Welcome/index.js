// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  OnSubscribe = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      this.setState({isSubscribe: false})
    } else {
      this.setState({isSubscribe: true})
    }
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="des">Thank you!Happy Learning</p>
        {isSubscribe ? (
          <button className="button" type="button" onClick={this.OnSubscribe}>
            Subscribe
          </button>
        ) : (
          <button className="button" type="button" onClick={this.OnSubscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
