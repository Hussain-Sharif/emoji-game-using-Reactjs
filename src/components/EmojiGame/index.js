import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'

// Write your code here.

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojisList: props.emojisList,
      totalScore: 0,
      topScore: 0,
      activeGame: true,
      clickedEmojis: [],
      isInfo: false,
      startGame: false,
      gameCount: 15,
    }
  }

  clickEmoji = id => {
    this.setState(prev => {
      const {totalScore, topScore, clickedEmojis, emojisList} = prev
      //   const {emojisList} = this.props
      const len = emojisList.length // length of original List
      const check = clickedEmojis.includes(id) // Cheking :}

      if (check === false) {
        const added = [...clickedEmojis, id] // adding into NewList
        const sum = added.reduce((a, b) => a + b) // Summing the List id's
        if (sum < (len * (len - 1)) / 2) {
          return {
            totalScore: totalScore + 1,
            clickedEmojis: added,
            emojisList: emojisList.sort(() => Math.random() - 0.5),
          }
        }
        return {
          totalScore: totalScore + 1,
          topScore: totalScore > topScore ? totalScore + 1 : topScore,
          clickedEmojis: added,
          emojisList: emojisList.sort(() => Math.random() - 0.5),
          activeGame: false,
        }
      }
      clearInterval(this.timerID)
      return {
        topScore: totalScore > topScore ? totalScore : topScore,
        activeGame: false,
        clickedEmojis: [],
      }
    })
  }

  playAgain = () => {
    this.setState({
      activeGame: true,
      totalScore: 0,
      clickedEmojis: [],
      gameCount: 15,
    })
    this.timerID = setInterval(this.startCount, 1000)
  }

  displayDes = () => {
    this.setState(prev => {
      const {isInfo} = prev
      return {isInfo: !isInfo}
    })
  }

  startCount = () => {
    this.setState(prev => {
      const {gameCount, totalScore} = prev
      if (gameCount > 0) {
        return {gameCount: gameCount - 1}
      }
      clearInterval(this.timerID)
      return {activeGame: false, topScore: totalScore}
    })
  }

  activateGame = () => {
    const {startGame} = this.state
    if (startGame === false) {
      this.timerID = setInterval(this.startCount, 1000)
    }
    this.setState({startGame: true})
  }

  render() {
    // let {emojisList} = this.props
    const {
      totalScore,
      topScore,
      activeGame,
      startGame,
      gameCount,
      isInfo,
      emojisList,
    } = this.state
    // emojisList =
    //   totalScore > 0 ? emojisList.sort(() => Math.random() - 0.5) : emojisList
    return (
      <div className="main-bg">
        <NavBar
          totalScore={totalScore}
          topScore={topScore}
          activeGame={activeGame}
          startGame={startGame}
          gameCount={gameCount}
        />
        {!startGame ? (
          <div className="card">
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
                    <p className="des-para">Try to score 12 in 15 Seconds</p>
                  </li>
                </>
              ) : null}
            </ul>
            <button
              onClick={this.activateGame}
              className="start-game-btn"
              type="button"
            >
              Start Game
            </button>
          </div>
        ) : (
          <div className="card">
            {activeGame ? (
              <>
                <div className="head-Div">
                  <h1 className="head">Click~Unique</h1>
                  <button
                    className="des-btn"
                    type="button"
                    onClick={this.displayDes}
                  >
                    <span className="emo-imgg">&#128071;</span>
                  </button>
                </div>
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
                gameCount={gameCount}
                playAgain={this.playAgain}
              />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
