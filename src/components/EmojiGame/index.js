import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    totalScore: 0,
    topScore: 0,
    activeGame: true,
    clickedEmojis: [],
  }

  clickEmoji = id => {
    this.setState(prev => {
      const {totalScore, clickedEmojis} = prev
      const {emojisList} = this.props
      const len = emojisList.length // length of original List
      const check = clickedEmojis.includes(id) // Cheking :}

      if (check === false) {
        const added = [...clickedEmojis, id] // adding into NewList
        const sum = added.reduce((a, b) => a + b) // Summing the List id's
        if (sum < (len * (len + 1)) / 2) {
          return {
            totalScore: totalScore + 1,
            clickedEmojis: added,
          }
        }
        return {
          totalScore: 0,
          topScore: totalScore + 1,
          clickedEmojis: added,
          activeGame: false,
        }
      }
      return {
        totalScore: 0,
        topScore: totalScore,
        activeGame: false,
        clickedEmojis: [],
      }
    })
  }

  render() {
    let {emojisList} = this.props
    const {totalScore, topScore, activeGame} = this.state
    emojisList =
      totalScore > 0 ? emojisList.sort(() => Math.random() - 0.5) : emojisList
    return (
      <div className="main-bg">
        <NavBar
          totalScore={totalScore}
          topScore={topScore}
          activeGame={activeGame}
        />
        <div className="card">
          <ul className="playground">
            {emojisList.map(each => (
              <EmojiCard
                key={each.id}
                each={each}
                clickEmoji={this.clickEmoji}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame
