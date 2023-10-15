/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

export default class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shuffledEmojis: [],
      checkEmojis: [],
      reClick: false,
      topScore: 0,
      score: 0,
    }
  }

  componentDidMount() {
    const shuffledEmojis = this.shuffledEmojisList()
    const emojiGameScore = Cookies.get('emoji_game_score')
    const cookieValue = emojiGameScore === undefined ? 0 : emojiGameScore
    this.setState({shuffledEmojis, topScore: cookieValue})
    console.log(shuffledEmojis)
  }

  checkFunc = id => {
    const {checkEmojis} = this.state
    if (checkEmojis.includes(id)) {
      this.setState({reClick: true})
    } else {
      checkEmojis.push(id)
      this.shuffledEmojisList()
      this.setState({checkEmojis, score: checkEmojis.length})
    }
  }

  playCallFunc = s => {
    const {topScore} = this.state
    const newTopScore = s > topScore ? s : topScore
    Cookies.set('emoji_game_score', newTopScore, {expires: 5})
    this.setState({
      score: 0,
      topScore: newTopScore,
      reClick: false,
      checkEmojis: [],
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {shuffledEmojis, reClick, score, topScore} = this.state
    return (
      <div className="emoji-game-main-container">
        <NavBar score={score} reclick={reClick} topScore={topScore} />
        {reClick || score === 12 ? (
          <div className="emoji-game-container">
            <WinOrLoseCard score={score} playCallFunc={this.playCallFunc} />
          </div>
        ) : (
          <div className="emoji-game-container">
            <ul className="emoji-game-inner-container">
              {shuffledEmojis.map(item => (
                <EmojiCard
                  key={item.id}
                  item={item}
                  checkFunc={this.checkFunc}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

// Write your code here.
