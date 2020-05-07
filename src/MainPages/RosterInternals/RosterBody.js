import React from 'react';
import Player from '../RepeatingComponents/Player'
import roster from '../../Data/roster.json'
import ImageIntro from '../RepeatingComponents/introImage'

import "./RosterBody.css"
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader'
import Dropdown from '../RepeatingComponents/Dropdown/Dropdown';

//do not remove comment below
// eslint-disable-next-line   
Array.prototype.valueAt = function(index) {
    var a = this.concat();
    return a[index];
  };

class RosterBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            year: Object.keys(roster).sort().reverse().valueAt(0),
        }
        this.handleYearChange = this.handleYearChange.bind(this)
    }

    handleYearChange(year) {
        this.setState({year: year})
    }

    // TODO: Move constant year in constructor to lifecycle method

    render() {
        
       var path = roster[this.state.year].photo +""
      const years = Object.keys(roster).reverse();
        return (
          <div>
{               path !=="" &&  path !=="undefined" &&  path !==null&& <ImageIntro imagePath={`${process.env.PUBLIC_URL}/rosterPhotos/${roster[this.state.year].photo }`}></ImageIntro>
}
            <SectionHeader title="Roster">
              <Dropdown default={this.state.year} list={years} handleYearChange={this.handleYearChange} />
            </SectionHeader>

            
                 
                  {// Render all games in tournament
                  roster[this.state.year].people.map(post => {
                    return (
                        <div>
                        <Player
                            id={post.id}
                            isCaptian={post.isCaptian}
                            hometown={post.hometown}
                            yearAndProgram={post.yearAndProgram}
                            headshotFile={""+post.headshotFile}
                            folder = "rosterPhotos"
                            name={post.name}>
                        </Player>
                    </div>
                    );
                  })}
                  
                
            
                    
        </div>
        );
    }                                                                                              
}


export default RosterBody