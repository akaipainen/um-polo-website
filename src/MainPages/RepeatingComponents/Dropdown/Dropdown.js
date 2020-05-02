import React, { Component } from 'react'

import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.default
    }
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleClickOutside() {
    this.setState({
      listOpen: false
    })
  }

  handleYearChange(year) {
    this.props.handleYearChange(year);
    this.setState({headerTitle: year});
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  
  render() {
    const {list} = this.props
    const {listOpen, headerTitle} = this.state
    return (
      <div class="dropdown-container">
        <div className="dropdown-header" onClick={() => this.toggleList()}>
          <div className="dropdown-header-title">
            {headerTitle}
            {/* {listOpen
              ? '↓'
              : '↑'
            } */}
          </div>
        </div>
        {listOpen &&
          <ul className="dropdown-list">
            {
              list.map(item => (
                <li className="dropdown-list-item" key={item} onClick={() => this.handleYearChange(item)}>{item}</li>
              ))
            }
          </ul>
        }
      </div>
    )
  }

};

export default Dropdown