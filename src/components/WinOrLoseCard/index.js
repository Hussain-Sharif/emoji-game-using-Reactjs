// Write your code here.
import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  again = () => {
    const {playAgain} = this.props
    playAgain()
  }

  render() {
    const {emojisList, totalScore} = this.props
    const l = emojisList.length
    const checkEquality = l === totalScore
    return (
      <div className="result-card">
        {checkEquality ? (
          <>
            <div className="result-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                className="r-img"
                alt="win or lose"
              />
            </div>
            <div className="result-2">
              <h1 className="r-status">You Won</h1>
              <p className="r-mention">Best Score</p>
              <p className="r-score">{totalScore}/12</p>
              <button onClick={this.again} className="play-Btn" type="button">
                Play Again
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="result-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                className="r-img"
                alt="win or lose"
              />
            </div>
            <div className="result-2">
              <h1 className="r-status">You Lose</h1>
              <p className="r-mention">Score</p>
              <p className="r-score">{totalScore}/12</p>
              <button onClick={this.again} className="play-Btn" type="button">
                Play Again
              </button>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default WinOrLoseCard
