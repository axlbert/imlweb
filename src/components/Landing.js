import React from 'react';
//import prozess from '../img/prozess.png';
import Zoom from 'react-reveal/Zoom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



export default function Landing() {
  return (
    <>
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
    </>
  );
}