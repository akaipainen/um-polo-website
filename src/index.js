import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roster from './MainPages/Roster';
import Schedule from './MainPages/Schedule';
import News from './MainPages/News';
import ContactUs from './MainPages/ContactUs';
import AboutUs from './MainPages/AboutUs';
import Fundraising from './MainPages/Fundraising';
import HomeComp from './MainPages/Home';



import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

function Index(){
  return (
    <div>
      <BrowserRouter basename='/~umpolo'>
      <Route exact path="/" component = {HomeComp}/>
      <Route exact path="/index.html" component = {HomeComp}/>
      <Route exact path="/roster" component = {Roster}/>
      <Route exact path="/aboutus" component = {AboutUs}/>
      <Route exact path="/fundraising" component = {Fundraising}/>
      <Route exact path="/news" component = {News}/>
      <Route exact path="/scheduleandresults" component = {Schedule}/>
      <Route exact path="/contactus" component = {ContactUs}/>

      
      </BrowserRouter>
    </div>
  );
}
const rootElement = document.getElementById("root")
ReactDOM.render(<Index />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
