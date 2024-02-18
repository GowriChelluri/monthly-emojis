import './index.css'

const Counter = () => (
  <div className="count-container">
    <div className="items">
      <select name="emoji-names" className="drop-down">
        <option value="very happy">Very Happy</option>
        <option value="happy">Happy</option>
        <option value="neutral">Neutral</option>
        <option value="sad">Sad</option>
        <option value="very sad">Very Sad</option>
      </select>
      <select name="day-names" className="drop-down">
        <option value="sun">Sun</option>
        <option value="mon">Mon</option>
        <option value="tue">Tue</option>
        <option value="wed">Wed</option>
        <option value="thu">Thu</option>
        <option value="fri">Fri</option>
        <option value="sat">Sat</option>
      </select>
      <p className="count">00</p>
    </div>
  </div>
)
export default Counter
