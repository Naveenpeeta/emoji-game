import './index.css'

const EmojiCard = props => {
  const {clickEmoji, emojiDetails} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onclickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" onClick={onclickEmoji} className="emoji-btn ">
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}
export default EmojiCard
