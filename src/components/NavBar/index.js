// Write your code here.
import {Component} from 'react'
import './index.css'

export default class NavBar extends Component {
  render() {
    const {score, reclick, topScore} = this.props
    return (
      <nav className="emoji-game-nav-container">
        <div className="emoji-game-nav-inner-container">
          <div className="logo-container">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <p className="logo-name-ele">Emoji Game</p>
          </div>
          {reclick ? (
            ''
          ) : (
            <div className="score-container">
              <p className="score-ele">Score: {score}</p>
              <p className="score-top-ele">Top Score: {topScore}</p>
            </div>
          )}
        </div>
      </nav>
    )
  }
}
