import {Component} from 'react'
import './index.css'

export default class EmojiCard extends Component {
  render() {
    const {item, checkFunc} = this.props
    const {id, emojiName, emojiUrl} = item
    const checkEmoji = () => {
      checkFunc(id)
    }
    return (
      <li className="emoji-card-container" id={id} onClick={checkEmoji}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </li>
    )
  }
}
