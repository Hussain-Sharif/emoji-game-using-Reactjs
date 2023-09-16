// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {totalScore, topScore, activeGame} = this.props
    return (
      <nav className={`navbar ${activeGame ? null : 'flex-change'} `}>
        <div className="nav-logo-div">
          <img
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo"
          />
          <p className="logo-head">Emoji Game</p>
        </div>
        {activeGame ? (
          <div className="score-div">
            <p className="score-details">Score: {totalScore}</p>
            <p className="score-details">Top Score: {topScore}</p>
          </div>
        ) : null}
      </nav>
    )
  }
}

export default NavBar
