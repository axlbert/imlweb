import React from 'react';
import Grid from '@material-ui/core/Grid';

import lasersample from '../img/lasersample.png';

export default function Marking() {
  return (
    <>
            <Grid
                container
                direction="column"
                
                alignItems="center"
                className="respWrap"
            >
            <h1 className="siteSubHeadline">
            Kennzeichnung und Rückverfolgung - wir lasern und drucken für Sie!
          </h1>
          <span className="pitchText">Hochauflösende Druckbilder auf kleinstem Raum sind unsere Spezialität.</span>
          <span className="pitchText">Wir beschriften und markieren sowohl Kunststoff- als auch Metallartikel.</span>
           <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                style={{height: "60vh"}}
            >
                <Grid 
                    item
                    xs={11}
                    sm={5}
                    className="cardItem-lg"
                    style={{paddingBottom:"0px",paddingLeft:"5px",paddingRight:"5px"}}
                >
                    
                    
                    
                        <img className="processPic" src={lasersample} alt="laser beschriftung mit faserlaser" />
                </Grid>
                <Grid 
                    item
                    xs={11}
                    sm={5}
                    className="cardItem-lg"
                    style={{textAlign: "center",paddingLeft:"10px"}}
                >

                    <p><span className="expText"><strong>Beständig und Fälschungssicher</strong></span></p>
                    <p><span className="expText">Artikelkennzeichnungen per Laser sind abriebfest und auch bei aggresiven Sterilisationsverfahren beständig.</span></p>
                  
                    <p><span className="expText"><strong>Hochauflösend und kontrastreich</strong></span></p>
                    <p><span className="expText">Ebenso korrosionsbeständig - auf Kunststoff und Metal.</span></p>
                   
                    <p><span className="expText"><strong>Rückverfolgung und Serialisierung</strong></span></p>
                    <p><span className="expText">Auch fortlaufende Barcodes oder QR Codes sind realisierbar. Artikelbeschriftung gemäß UDI und anderer Normen für permanente Nachverfolgung.</span></p>
                 

                </Grid>

            
                
            </Grid>

            
            </Grid>
    </>
  );
}