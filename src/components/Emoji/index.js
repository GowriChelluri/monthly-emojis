import './index.css'

const Emoji = props => {
  const {emojiDetails} = props
  const {emojiName, emojiUrl} = emojiDetails
  return (
    <li className="emojis">
      <p className="emoji-name">{emojiName}</p>
      <img src={emojiUrl} alt={emojiName} className="emoji" />
    </li>
  )
}
export default Emoji
