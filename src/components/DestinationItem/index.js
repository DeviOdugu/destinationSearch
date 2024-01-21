// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItems} = props
  const {name, imgUrl} = destinationItems

  return (
    <li className="list">
      <img src={imgUrl} alt={name} height="140px" width="180px" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
