// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="search">
          <input
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            className="search-input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            height="15px"
            width="15px"
            alt="search icon"
          />
        </div>
        <ul className="lists">
          {searchResults.map(eachList => (
            <DestinationItem key={eachList.id} destinationItems={eachList} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
