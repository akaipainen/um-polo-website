import React from 'react'
import Updates from '../../Data/news.json'
import "./HomeBody.css"
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import { Post } from '../RepeatingComponents/Post';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
class HomeBody extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        };
    }

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });



    renderGallery() {
        const { currentIndex } = this.state;
  
        return (<AliceCarousel className = "slides"duration={1000}autoPlayInterval = {5000}
            autoPlay={true}
            fadeOutAnimation={true}
            stopAutoPlayOnHover={false}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
         onSlideChanged={this.onSlideChanged}

        >
            <img src={`${process.env.PUBLIC_URL}/mavShooting.png`} className="yours-custom-class" />
            <img src={`${process.env.PUBLIC_URL}/team.png`} className="yours-custom-class" />
            <img src={`${process.env.PUBLIC_URL}/banquet.png`} className="yours-custom-class" />
            <img src={`${process.env.PUBLIC_URL}/daBoys.png`} className="yours-custom-class" />
            <img src={`${process.env.PUBLIC_URL}/bigtenchamps2017.png`} className="yours-custom-class" />
        </AliceCarousel>);
      }



    render() {
        return (
            <div>

                <div className="newBox">

                { this.renderGallery() }

                </div>
{  //          <button className = "back" onClick={() => this.slidePrev()}>Prev button</button>
}
{          //      <button onClick={() => this.slideNext()}>Next</button>
}
{      //          <ImageIntro imagePath={`${process.env.PUBLIC_URL}/mavShooting.png`}></ImageIntro>
}
{        //        <a className="streamingAlert" href="https://youtube.com" rel="noopener noreferrer" target="_blank">Matches now streamed and archived on YouTube!</a>
}                <img src={`${process.env.PUBLIC_URL}/champBanner.svg`} alt="champ" className="champ"></img>
                <SectionHeader title="Updates" />

                {Updates.map(post => {

                    return (
                        <div>

                            {(Updates[0].title===post.title ||Updates[1].title===post.title)&&<Post optionalDate={post.date} optionalTitle={post.title} optionalIndex={post.id}>
                                {post.content}
                            </Post>}
                        </div>

                    )
               
                })}
                ]
                <SectionHeader title="Alumni Network" />

                <img alt="companies" className="companies" src={`${process.env.PUBLIC_URL}/alumniCompanies.png`}></img>
                <p className="alumni">Our Alumni get placed all across the globe and strengthen the Michigan Water Polo network.</p>
            </div>





        )
    }
}

    export default HomeBody