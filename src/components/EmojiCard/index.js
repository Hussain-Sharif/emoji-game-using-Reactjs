// Write your cod
import {Component} from 'react'
import './index.css'

class EmojiCard extends Component {
  shuffle = () => {
    const {clickEmoji, each} = this.props
    clickEmoji(each.id)
  }

  render() {
    const {each} = this.props
    return (
      <li className="emo-li">
        <button onClick={this.shuffle} type="button" className="emo-btn">
          <img className="image" src={each.emojiUrl} alt={each.emojiName} />
        </button>
      </li>
    )
  }
}

export default EmojiCard
