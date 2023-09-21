// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {totalScore, topScore, activeGame, startGame, gameCount} = this.props
    console.log('before', gameCount, startGame)
    console.log('after', gameCount, startGame)
    return (
      <nav className={`navbar ${activeGame ? null : 'flex-change'} `}>
        <div className="nav-logo-div">
          <img
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
          />
          <h1 className="logo-head">Emoji Game</h1>
        </div>
        {activeGame ? (
          <>
            {startGame ? (
              <div className="counter-Div">
                <h1 className="counter-display">{gameCount}</h1>
              </div>
            ) : null}

            <div className="score-div">
              <p className="score-details">Score: {totalScore}</p>
              <p className="score-details">Top Score: {topScore}</p>
            </div>
          </>
        ) : null}
      </nav>
    )
  }
}

export default NavBar
