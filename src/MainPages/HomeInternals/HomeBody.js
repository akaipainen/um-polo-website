import React from 'react'
import Updates from '../../Data/news.json'
import photos from '../../Data/slideshow.json'

import "./HomeBody.css"
import SectionHeader from '../RepeatingComponents/SectionHeader/SectionHeader';
import { Post } from '../RepeatingComponents/Post';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
Array.prototype.upTo = function(index) {
 
    var a = this.concat();
    for (var i = 0; i<index;++i){
        a[i] = i
    }
    
    return a;
  }
class HomeBody extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0,
            totalSlides:photos.numberSlides
        };
    }
    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });


    renderGallery() {

        const { currentIndex } = this.state;

        return (<AliceCarousel className="slides" duration={1000} autoPlayInterval={5000}
            autoPlay={true}
            fadeOutAnimation={true}
            stopAutoPlayOnHover={false}
            buttonsDisabled={true}
            dotsDisabled = {true}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
        >
            {photos.links.map(post => {

                return (
                    <div>

                        {
                            <img src={`${process.env.PUBLIC_URL}/${post.filename}`} className="yours-custom-class" />
                        }
                    </div>
                )
            })}
        </AliceCarousel>);
    }



    render() {
        var array1 = Array.of(5)
        array1 = array1.upTo(this.state.totalSlides)
console.log(array1)
        return (
            <div>

<div className="newBox">
                    {this.renderGallery()}
                </div>
                <div className = "buttonHolders">
                {array1.map(value => {

return (
    <div>
        {this.state.currentIndex === value && <img className = "dots"src = {`${process.env.PUBLIC_URL}/select.svg`}></img>}
        {this.state.currentIndex !== value && <img className = "dots" onClick={() => this.slideTo(value)} src = {`${process.env.PUBLIC_URL}/noselect.svg`}></img> }

    </div>

)

})}
            
                    
                    </div>
                {/*<div className = "buttonHolders">
                        <button className = "button" onClick={() => this.slidePrev()}>Back</button>
                     <button  className = "button" onClick={() => this.slideNext()}>Forward</button>
</div>*/}

                
                {      //          <ImageIntro imagePath={`${process.env.PUBLIC_URL}/mavShooting.png`}></ImageIntro>
                }
                {        //        <a className="streamingAlert" href="https://youtube.com" rel="noopener noreferrer" target="_blank">Matches now streamed and archived on YouTube!</a>
                }                <img src={`${process.env.PUBLIC_URL}/champBanner.svg`} alt="champ" className="champ"></img>
                <SectionHeader title="Updates" />

                {Updates.map(post => {

                    return (
                        <div>

                            {(Updates[0].title === post.title || Updates[1].title === post.title) && <Post optionalDate={post.date} optionalTitle={post.title} optionalIndex={post.id}>
                                {post.content}
                            </Post>}
                        </div>

                    )

                })}

                <SectionHeader title="Alumni Network" />

                <img alt="companies" className="companies" src={`${process.env.PUBLIC_URL}/logos.jpg`}></img>
                <p className="alumni">Our Alumni get placed all across the globe and strengthen the Michigan Water Polo network.</p>
            </div>





        )
    }
}

export default HomeBody