import React from 'react';
//import prozess from '../img/prozess.png';
import Zoom from 'react-reveal/Zoom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
  


export default function Landing() {
  return (
    <div className="landingContainer">
            <Zoom left cascade>
            <h1 className="siteHeadline" style={{marginTop:"30vh"}}>
            
            Kunststoff - einfach machen
            
          </h1>
          
          <span className="pitchText">CNC-Bearbeitung, Beschriftung, Montage - beste Preise, kürzeste Lieferzeiten.</span>
          <Link to="/angebot" style={{textDecoration: "none"}}>
            <Button
                className="blurBtn"
                >
                Angebot anfragen
            </Button>
          </Link>
          </Zoom>
    </div>
  );
}