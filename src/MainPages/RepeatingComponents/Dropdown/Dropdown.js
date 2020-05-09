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

  close() {
       
    this.setState({
      listOpen: false
    })
  
  }
  open() {
    this.setState({
      listOpen: true
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
        <div className="dropdown-header"  onMouseEnter = {()=> this.open()} onMouseLeave = {()=> this.close()} onClick = {()=> this.toggleList()}>
          <div className="dropdown-header-title">
            {listOpen && <div>{headerTitle} ↓</div>}
            {!listOpen && <div>{headerTitle} ↑</div>}

            {/* {listOpen
              ? '↓'
              : '↑'
            } */}
          </div>
        </div>
        {listOpen &&
          <ul className="dropdown-list" onMouseLeave = {()=> this.close()} onMouseEnter = {()=> this.open()}>
            {
              list.map(item => (
                <li className={(item === headerTitle) + "dropdown-list-item" } key={item} onClick={() => this.handleYearChange(item)}>{item}</li>
              ))
            }
          </ul>
        }
      </div>
    )
  }

};

export default Dropdown