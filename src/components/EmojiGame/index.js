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
    isInfo: false,
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
          totalScore: totalScore + 1,
          topScore: totalScore > topScore ? totalScore + 1 : topScore,
          clickedEmojis: added,
          activeGame: false,
        }
      }
      return {
        topScore: totalScore > topScore ? totalScore : topScore,
        activeGame: false,
        clickedEmojis: [],
      }
    })
  }

  playAgain = () => {
    this.setState({activeGame: true, totalScore: 0, clickedEmojis: []})
  }

  displayDes = () => {
    this.setState(prev => {
      const {isInfo} = prev
      return {isInfo: !isInfo}
    })
  }

  render() {
    let {emojisList} = this.props
    const {totalScore, topScore, activeGame, isInfo} = this.state
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
            <>
              <div className="head-Div">
                <h1 className="head">Click~Unique</h1>
                {isInfo ? (
                  <button
                    className="des-btn"
                    type="button"
                    onClick={this.displayDes}
                  >
                    <span className="emo-imgg">&#129321;</span>
                  </button>
                ) : (
                  <button
                    className="des-btn"
                    type="button"
                    onClick={this.displayDes}
                  >
                    <span className="emo-imgg">&#129320;</span>
                  </button>
                )}
              </div>
              <ul className={`description  ${!isInfo ? 'change-des' : null}`}>
                {isInfo ? (
                  <>
                    <li>
                      <p className="des-para">Click each Emoji Excatly Once</p>
                    </li>
                    <li>
                      <p className="des-para">
                        For Each Click, Emojis get shuffled Randomly
                      </p>
                    </li>
                    <li>
                      <p className="des-para">Try to score 12/12 :)</p>
                    </li>
                  </>
                ) : null}
              </ul>
              <ul className="playground">
                {emojisList.map(each => (
                  <EmojiCard
                    key={each.id}
                    each={each}
                    clickEmoji={this.clickEmoji}
                  />
                ))}
              </ul>
            </>
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
