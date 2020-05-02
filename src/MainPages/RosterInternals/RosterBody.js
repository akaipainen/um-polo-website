import React from 'react';
import Player from '../RepeatingComponents/Player'
import players2017 from '../../Data/players2017.json'
import players2018 from '../../Data/players2018.json'
import players2019 from '../../Data/players2019.json'

import "./RosterBody.css"
import { YellowBanner } from '../RepeatingComponents/YellowBanner'
import { render } from '@testing-library/react';




class RosterBody extends React.Component{
constructor(){
    super()
    this.state = {
        file: players2019,
        year:2019
    }
    this.handleYear = this.handleYear.bind(this)
}
 handleYear(fileNew,yearNew){
    this.setState({file: fileNew, year:yearNew}
        )}
    render(){
        return(
            <div>
            <YellowBanner>
                Roster
                    <div className="right">
                    <div class="dropdown">
                        <div class="dropbtn">{this.state.year} ↓</div>
                        <div class="dropdown-content">
                            <div className = {(2019 === this.state.year) +"button" } onClick={()=> this.handleYear(players2019,2019)}>2019</div>
                            <div className = {(2018 === this.state.year) +"button" } onClick={()=> this.handleYear(players2018,2018)}>2018</div>
                            <div className = {(2017 === this.state.year) +"button" } onClick={()=> this.handleYear(players2017,2017)}>2017</div>
                        </div>
                    </div>
                </div>
            </YellowBanner>

            {this.state.file.map(post => {

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
            })}


        </div>
        )
    }

}


export default RosterBody