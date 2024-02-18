import './index.css'

const Calendar = props => {
  const {dayDetails} = props
  const {day} = dayDetails
  return <li className="days">{day}</li>
}
export default Calendar
