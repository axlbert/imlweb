import React from 'react';
import Grid from '@material-ui/core/Grid';
import bohren from '../img/bohren.png';
import drehen from '../img/drehen.png';
import fraesen from '../img/fraesen.png';
import montage from '../img/montage.png';
import spritzguss from '../img/spritzguss.png';
import tampondruck from '../img/tampondruck.png';
import tempern from '../img/tempern.png';
import ultraschall from '../img/ultraschall.png';
import warmeinbetten from '../img/warmeinbetten.png';
import laser from '../img/lasern.png';
//import prozess from '../img/prozess.png';
import Zoom from 'react-reveal/Zoom';

const machines = [{name: 'Laser Beschriftung', photo: laser},{name: 'Fräsen', photo: fraesen},{name: 'Drehen CNC', photo: drehen},{name: 'Bohren', photo: bohren},{name: 'Tempern', photo: tempern},{name: 'Schrauben', photo: warmeinbetten},{name: 'Montage', photo: montage},{name: 'Tampon- und Siebdruck', photo: tampondruck},{name: 'Spritzguss', photo: spritzguss},{name: 'Ultraschall Schweißen', photo: ultraschall}]


export default function Processes() {
  return (
    <>
            <Grid
                container
                direction="column"
                alignItems="center"
                className="respWrap"
                
            >
            <h1 className="siteSubHeadline">
            Unser Leistungsspektrum
          </h1>
          <span className="pitchText">Wie dürfen wir Ihren Kunststoffartikel bearbeiten?</span>
          <Zoom>
          <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                style={{height: "60vh"}}
                
                
            >

            {
                machines.map(element => 
              {
                return(
                  
                    <div
                    className="processCard"
                    key={element.name}
                >
                    
                        <img className="processPic" src={element.photo} alt={element.name}/>
                        <div className="colorOverlay"/>
                        <span className="floatText">{element.name}</span>
                    
                    
                    
                </div>
                

                )
              }
                )
            }
                
            </Grid>
            </Zoom>

            
            </Grid>
    </>
  );
}