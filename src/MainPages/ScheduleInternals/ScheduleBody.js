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
//do not remove comment below
// eslint-disable-next-line
Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
};
//do not remove comment below

// eslint-disable-next-line
Array.prototype.valueAt = function (index) {
  var a = this.concat();
  return a[index];
};

class ScheduleBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: Object.keys(Schedule)
        .concat(Object.keys(Awards))
        .unique()
        .sort()
        .reverse()
        .valueAt(0),
      champs: false,
    };
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleTurnOn = this.handleTurnOn.bind(this);
  }

  handleYearChange(year) {
    this.setState({ champs: false });
    this.setState({ year: year });
  }
  handleTurnOn() {
    this.setState({ champs: true });
  }

  render() {
    const schedule = Schedule;
    const awards = Awards;

    const scheduleYears = Object.keys(schedule).reverse();
    const awardYears = Object.keys(Awards).reverse();
    const years = awardYears.concat(scheduleYears).unique().sort().reverse();

    return (
      <div>
        <SectionHeader space="Please" title="Schedule and Results">
          <Dropdown
            default={this.state.year}
            list={years}
            handleYearChange={this.handleYearChange}
          />
        </SectionHeader>
        {this.state.champs === true && (
          <div class="B10champHolder">
            <img
              className="B10champImage"
              src={`${process.env.PUBLIC_URL}/Icons/B10champs.png`}
              alt="big 10 champ banner"
            ></img>
          </div>
        )}
        {
          // Render all tournaments
          scheduleYears.includes(this.state.year) && (
            <div>
              {this.state.champs === true && <Sub>Matches</Sub>}{" "}
              {this.state.champs === false && <Sub space="Space">Matches</Sub>}
              {Object.keys(schedule[this.state.year]).map((tournament) => {
                return (
                  <div>
                    <TournBanner
                      tournName={tournament}
                      host={schedule[this.state.year][tournament].host}
                      location={schedule[this.state.year][tournament].location}
                      dates={schedule[this.state.year][tournament].dates}
                      directions={
                        schedule[this.state.year][tournament].directions
                      }
                    />
                    {
                      // Render all games in tournament
                      schedule[this.state.year][tournament].games.map(
                        (game) => {
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
                        }
                      )
                    }
                    <div className = "someSmallSpace"></div>
                  </div>
                );
              })}
            </div>
          )
        }
        {awardYears.includes(this.state.year) &&
          scheduleYears.includes(this.state.year) && (
            <div className="someSpacing"></div>
          )}

        {awardYears.includes(this.state.year) && (
          <div>
            <Sub>End of Season Awards</Sub>

            {Object.keys(awards[this.state.year]).map((post) => {
              if (
                awards[this.state.year][post].awardName === "BigTenChamps" &&
                this.state.champs === false
              ) {
                //this.setState({ champs: true });
                this.handleTurnOn();
              }
              return (
                <div>
                  {awards[this.state.year][post].awardName !==
                    "BigTenChamps" && (
                    <AwardPannel
                      title={awards[this.state.year][post].awardName}
                      index={awards[this.state.year][post].id}
                    >
                      {
                        // Render all people who got award
                        awards[this.state.year][post].recipients.map(
                          (people) => {
                            return (
                              <div>
                                {people}
                                <br></br>
                              </div>
                            );
                          }
                        )
                      }
                    </AwardPannel>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <div className="someSpacing"></div>
      </div>
    );
  }
}

export default ScheduleBody;
