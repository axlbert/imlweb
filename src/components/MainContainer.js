import React from 'react';
import '../App.css';
import BottomNav from './BottomNav.js';
import HeaderNav from './HeaderNav.js';
import Wizard from './Wizard.js';
import Landing from './Landing.js';
import Processes from './Processes.js';
import Quality from './Quality.js'
import Contact from './Contact.js'
import Reasons from './Reasons.js'
import Delivery from './Delivery.js'
import DataProtection from './DataProtection.js'
import Drawer from './Drawer.js';
import Marking from './Marking.js'
import laser from '../img/lasern.png';
import Grid from '@material-ui/core/Grid';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import CookieConsent from "react-cookie-consent";

import pic1 from '../img/iml13.jpeg';
import pic2 from '../img/iml15.jpeg';
import pic3 from '../img/iml16.jpeg';
import pic4 from '../img/iml20.jpeg';
import pic5 from '../img/iml22.jpeg';
import pic6 from '../img/iml25.jpeg';
import pic7 from '../img/iml26.jpeg';



export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    const images = [
      pic1, pic2, pic3, pic4,pic5,pic6,pic7,laser
    ]

    this.state = {category: "cat1",
    images,
    currentImg: 0
  
  };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const {images, currentImg} = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({currentImg: newCurrentImg});
  }


  handleClick = selectedCat => {
    this.setState({category: selectedCat});
}

  render () {
    const {images, currentImg} = this.state;
    const urlString = `url('${images[currentImg]}')`;

      return (
        <Router>
        <div className="backgroundSetting"
        style={{ backgroundImage: urlString }}
        >
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          <Drawer/>
          </Grid>
          <Grid 
            container
            item
            direction="column"
            justify="space-around"
            alignItems="center" 
            xs={12}
          >
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route exact path="/angebot">
                    <Wizard/>
                </Route>
                <Route exact path="/kennzeichnung">
                    <Marking/>
                </Route>
                <Route exact path="/lieferstatus">
                    <Delivery />
                </Route>
                <Route  exact path="/prozesse">
                    <Processes/>
                </Route>
                <Route  exact path="/qualitaet">
                    <Quality/>
                </Route>
                <Route exact path="/kontakt">
                    <Contact/>
                </Route>
                <Route exact path="/staerken">
                    <Reasons/>
                </Route>
                <Route exact path="/datenschutz">
                    <DataProtection/>
                </Route>
            </Switch>
            
          </Grid>
          
              <BottomNav handleClick={this.handleClick}/>

              <CookieConsent
                location="bottom"
                buttonText="Ich willige ein"
                cookieName="consentcookie"
                style={{ background: "#7b7b7bcf" }}
                buttonStyle={{ background: "#a0a0a0", color: "white", fontSize: "13px" }}
                expires={150}
              >
                Auch wir lieben Cookies. Durch Nutzung der Seite stimmen Sie der Nutzung von Cookies zu.{" "}
                <span style={{ fontSize: "10px" }}>Weitere Hinweise lesen Sie in unseren Datenschutzbestimmungen</span>
              </CookieConsent>
              
          </div>
        </div>
        </Router>
      )
    }
}
