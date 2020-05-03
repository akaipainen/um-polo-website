import React from 'react';
import Player from '../RepeatingComponents/Player'
import roster from '../../Data/roster.json'

import "./RosterBody.css"
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader'
import { render } from '@testing-library/react';
import Dropdown from '../RepeatingComponents/Dropdown/Dropdown';




class RosterBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            year: "2019"
        }
        this.handleYearChange = this.handleYearChange.bind(this)
    }

    handleYearChange(year) {
        this.setState({year: year})
    }

    // TODO: Move constant year in constructor to lifecycle method

    render() {
      const years = Object.keys(roster).reverse();
        return (
          <div>
            <SectionHeader title="Roster">
              <Dropdown default={this.state.year} list={years} handleYearChange={this.handleYearChange} />
            </SectionHeader>

            {
                roster[this.state.year].map(post => {
                    return (
                        <div>
                            <Player
                                id={post.id}
                                isCaptian={post.isCaptian}
                                hometown={post.hometown}
                                yearAndProgram={post.yearAndProgram}
                                headshotFile={post.headshotFile}
                                name={post.name}>
                            </Player>
                        </div>
                    )
                })
            }
            </div>
        )
    }

}


export default RosterBody