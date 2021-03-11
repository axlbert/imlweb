import React from 'react';
import Grid from '@material-ui/core/Grid';
import qm1 from '../img/iml3.jpeg';
import qm2 from '../img/iml7.jpeg';
import qm3 from '../img/iml19.jpeg';
import Zoom from 'react-reveal/Zoom';

const machines = [{name: 'Messmittelraum', photo: qm1},{name: 'Digitale Messmittel', photo: qm2},{name: 'Prüfprotokolle', photo: qm3}]

export default function Quality() {
  return (
    <>
            <Grid
                container
                direction="column"
                alignItems="center"
                className="respWrap"
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
                style={{height: "60vh"}}
            >

{
                machines.map(element => 
              {
                return(
                  
                    <div
                    className="processCard2"
                    
                    
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