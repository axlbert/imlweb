import React from 'react';
import '../App.css';
import BottomNav from './BottomNav.js';
import HeaderNav from './HeaderNav.js';
import Wizard from './Wizard.js';
import Processes from './Processes.js';
import Quality from './Quality.js'
import Contact from './Contact.js'
import Reasons from './Reasons.js'
import Delivery from './Delivery.js'
import DataProtection from './DataProtection.js'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Zoom from 'react-reveal/Zoom';
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
      pic1, pic2, pic3, pic4,pic5,pic6,pic7
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

    if (this.state.category === 'cat1') {
      return (
        <div className="backgroundSetting"
        style={{ backgroundImage: urlString }}
        >
          <div className="backgroundOverlay">
          <Grid item style={{height: "120px"}} xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid 
            container
            item
            direction="column"
            justify="space-around"
            alignItems="center" 
            xs={12}
            
            
          >
            <Zoom left cascade>
            <h1 className="siteHeadline">
            
            Kunststoff - einfach machen
            
          </h1>
          
          <span className="pitchText">CNC-Bearbeitung, Beschriftung, Montage - beste Preise, kürzeste Lieferzeiten.</span>
          
          <Button
            className="blurBtn"
            onClick={() => this.handleClick('cat2')}
            >
              Angebot anfragen
          </Button>
          </Zoom>
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
      )
    }
    if (this.state.category === 'cat2') {
      return (
        <div className="backgroundSetting">
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item className="mainContent" xs={12}>
            <Wizard/>
          </Grid>
              <BottomNav handleClick={this.handleClick}/>
              
          </div>
        </div>
      )
    }
    if (this.state.category === 'cat3') {
      return (
        <div className="backgroundSetting">
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item className="mainContent processOffer" xs={12}>
            <Processes/>
          </Grid>
              <BottomNav handleClick={this.handleClick}/>
              
          </div>
        </div>
      )
    }
    if (this.state.category === 'cat4') {
      return (
        <div className="backgroundSetting-qm">
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item className="mainContent processOffer" xs={12}>
            <Quality/>
          </Grid>
              <BottomNav handleClick={this.handleClick}/>
              
          </div>
        </div>
      )
    }
    if (this.state.category === 'cat5') {
      return (
        <div className="backgroundSetting-contact">
          <div className="backgroundOverlay">
          <Grid item xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item className="mainContent processOffer" xs={12}>
            <Contact/>
          </Grid>
              <BottomNav handleClick={this.handleClick}/>
              
          </div>
        </div>
      )
    }
    if (this.state.category === 'cat6') {
      return (
        <div className="backgroundSetting-contact">
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item className="mainContent processOffer" xs={12}>
            <Reasons/>
          </Grid>
              <BottomNav handleClick={this.handleClick}/>
              
          </div>
        </div>
      )
    }
    if (this.state.category === 'cat7') {
      return (
        <div className="backgroundSetting-contact">
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item className="mainContent processOffer" xs={12}>
            <Delivery/>
          </Grid>
              <BottomNav handleClick={this.handleClick}/>
              
          </div>
        </div>
      )
    }
    if (this.state.category === 'cat8') {
      return (
        <div className="backgroundSetting-contact">
          <div className="backgroundOverlay">
          <Grid item  xs={12}>
          <HeaderNav handleClick={this.handleClick}/>
          </Grid>
          <Grid item style={{height:"100%",overflow:"scroll"}}  xs={12}>
            <DataProtection/>
          </Grid>
              
              
          </div>
        </div>
      )
    }
    
  }
}
