// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onClickEmoji = () => {
    this.setState({isFeedback: true})
  }

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji-list">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickEmoji}
              >
                <img
                  src={each.imageUrl}
                  alt={each.name}
                  className="image-emoji"
                />
                <br />
                <span className="emoji-name">{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-heading">Thank You!</h1>
        <p className="thankyou-description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          {isFeedback ? this.renderThankyou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
