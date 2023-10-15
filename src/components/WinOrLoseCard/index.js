// Write your code here.
import {Component} from 'react'
import './index.css'

export default class WinOrLoseCard extends Component {
  render() {
    const {score, playCallFunc} = this.props
    const playAgainCallFunc = () => {
      console.log('Play Again button clicked')
      playCallFunc(score)
    }
    return (
      <div className="winOrLose-outer-container">
        <div className="winOrLose-container">
          <div className="winOrLose-inner-container">
            <h1 className="winOrLose-ele">
              {score === 12 ? 'You Won' : 'You Lose'}
            </h1>
            <p className="score-head-ele">
              {score === 12 ? 'Best Score' : 'score'}
            </p>
            <p className="score-x-ele">{score}/12</p>
            <button type="button" onClick={playAgainCallFunc}>
              play Again
            </button>
          </div>
          {score === 12 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="won-game"
              className="winOrLose-img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="lose-game"
              className="winOrLose-img"
            />
          )}
        </div>
      </div>
    )
  }
}
