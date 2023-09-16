import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'



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
      const {totalScore, topScore, clickedEmojis} = prev
      const {emojisList} = this.props
      const len = emojisList.length // length of original List
      const check = clickedEmojis.includes(id) // Cheking :}

      if (check === false) {
        const added = [...clickedEmojis, id] // adding into NewList
        const sum = added.reduce((a, b) => a + b) // Summing the List id's
        if (sum < (len * (len - 1)) / 2) {
          return {
            totalScore: totalScore + 1,
            clickedEmojis: added,
          }
        }
        return {
          totalScore: 0,
          topScore: totalScore > topScore ? totalScore + 1 : topScore,
          clickedEmojis: added,
          activeGame: false,
        }
      }
      return {
        totalScore: 0,
        topScore: totalScore > topScore ? totalScore : topScore,
        activeGame: false,
        clickedEmojis: [],
      }
    })
  }

  playAgain = () => {
    this.setState({activeGame: true})
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
          {activeGame ? (
            <ul className="playground">
              {emojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  each={each}
                  clickEmoji={this.clickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              emojisList={emojisList}
              topScore={topScore}
              totalScore={totalScore}
              playAgain={this.playAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
