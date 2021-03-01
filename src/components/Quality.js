import React from 'react';
import Grid from '@material-ui/core/Grid';
import qm1 from '../img/qm1.png';
import qm2 from '../img/qm2.jpg';
import qm3 from '../img/qm3.png';
import Zoom from 'react-reveal/Zoom';

const machines = [{name: 'Messmittelraum', photo: qm1},{name: 'Prüfprotokolle', photo: qm2},{name: 'Prozessaudits', photo: qm3}]

export default function Quality() {
  return (
    <>
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
            <Zoom>
            <h1 className="siteSubHeadline">
            Wir sind für jedes Detail gerüstet
          </h1>
          <span className="pitchText">Unsere Qualitätssicherung arbeitet mit modernen Meßmitteln und erfüllt auch individuelle Prüfprotokolle</span>
          <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >

{
                machines.map(element => 
              {
                return(
                  
                    <div
                    className="processCard"
                    key={element.name}
                >
                    
                        <img className="processPic" src={element.photo} alt={element.name} />
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