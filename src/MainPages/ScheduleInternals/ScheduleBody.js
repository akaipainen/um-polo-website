import React, { Component } from 'react'
import TournBanner from '../RepeatingComponents/TournBanner'
import Game from '../RepeatingComponents/Game'
import Schedule from '../../Data/schedule.json'
import { Post } from '../RepeatingComponents/Post';
import Updates from '../../Data/updates.json'

import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader'
import Dropdown from '../RepeatingComponents/Dropdown/Dropdown'


class ScheduleBody extends Component {
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

  render() {
    const schedule = Schedule;
    const years = Object.keys(schedule).reverse();
    return (
      <div>
        <SectionHeader title="Schedule and Results">
          <Dropdown default={this.state.year} list={years} handleYearChange={this.handleYearChange} />
        </SectionHeader>
        { // Render all tournaments
          Object.keys(schedule[this.state.year]).map(tournament => {
            return (
              <div>
                <TournBanner
                  tournName={tournament}
                  location={schedule[this.state.year][tournament].location}
                  directions={schedule[this.state.year][tournament].directions}
                />
                { // Render all games in tournament
                  schedule[this.state.year][tournament].games.map(game => {
                    return (
                      <Game
                        id={game.id}
                        opponent={game.opponent}
                        score={game.score}
                        result={game.result}
                        viewingLink={game.viewingLink}
                        time={game.time}
                        logo={game.logo}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}


export default ScheduleBody