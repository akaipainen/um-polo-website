import React, { Component } from "react";
import TournBanner from "../RepeatingComponents/TournBanner";
import Game from "../RepeatingComponents/Game";
import Schedule from "../../Data/schedule.json";
import Awards from "../../Data/awards.json";
import "./scheduleBody.css";
import { AwardPannel } from "../RepeatingComponents/AwardPannel";
import { Sub } from "../RepeatingComponents/subHeading";

import SectionHeader from "../RepeatingComponents/SectionHeader/SectionHeader";
import Dropdown from "../RepeatingComponents/Dropdown/Dropdown";
Array.prototype.unique = function() {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
};

class ScheduleBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019"
    };
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleYearChange(year) {
    this.setState({ year: year });
  }

  render() {
    const schedule = Schedule;
    const awards = Awards;
    const scheduleYears = Object.keys(schedule).reverse();
    const awardYears = Object.keys(Awards).reverse();
    const years = awardYears
      .concat(scheduleYears)
      .unique()
      .sort()
      .reverse();

    return (
      <div>
        <SectionHeader title="Schedule and Results">
          <Dropdown
            default={this.state.year}
            list={years}
            handleYearChange={this.handleYearChange}
          />
        </SectionHeader>
        
        {awardYears.includes(this.state.year) && (
          <div>
            <Sub>End of Season Awards</Sub>

            {Object.keys(awards[this.state.year]).map(post => {
              return (
                <div>
                  <AwardPannel
                    title={awards[this.state.year][post].awardName}
                    index={awards[this.state.year][post].id}
                  >
                    {// Render all people who got award
                    awards[this.state.year][post].recipients.map(people => {
                      return (
                        <div>
                          {people}
                          <br></br>
                        </div>
                      );
                    })}
                  </AwardPannel>
                </div>
              );
            })}
          </div>
        )}
        {awardYears.includes(this.state.year) &&
          scheduleYears.includes(this.state.year) && (
            <div className="someSpacing"></div>
          )}

        {// Render all tournaments
        scheduleYears.includes(this.state.year) && (
          <div>
            <Sub>Matches</Sub>

            {Object.keys(schedule[this.state.year]).map(tournament => {
              return (
                <div>
                  <TournBanner
                    tournName={tournament}
                    location={schedule[this.state.year][tournament].location}
                    dates={schedule[this.state.year][tournament].dates}
                    directions={
                      schedule[this.state.year][tournament].directions
                    }
                  />
                  {// Render all games in tournament
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
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default ScheduleBody;
