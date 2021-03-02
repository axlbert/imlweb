import React from 'react';
import Grid from '@material-ui/core/Grid';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


export default function Contact() {
  return (
    <>      
            <Grid
                container
                direction="column"
                alignItems="center"
                className="respWrap"
            >
            
            <h1 className="siteSubHeadline">
            Sie sind auf der Suche nach einem zuverlässigen Lieferanten? Sprechen Sie uns an!
          </h1>
          <span className="pitchText">Senden Sie uns am besten eine E-Mail. Wir antworten innerhalb eines Werktages oder rufen gerne zurück.</span>
         
          <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                
                <Grid 
                    item
                    xs={11}
                    sm={5}
                    className="cardItem-lg"
                    style={{paddingBottom:"0px",marginBottom:"20px"}}
                >
                   
                     <MapContainer style={{height:"100%"}} center={[53.88358577671143, 10.81687012544359]} zoom={11} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[53.88358577671143, 10.81687012544359]}>
    <Popup>
      Industriemontage Langer
    </Popup>
  </Marker>
</MapContainer>

                </Grid>
                
                <Grid 
                    item
                    xs={11}
                    sm={5}
                    className="cardItem-lg"
                    style={{textAlign: "left",paddingLeft:"10px",marginBottom:"20px"}}
                >
                    
                    <p><span className="expText">Telefon: 0451 / 48 666 57</span></p>
                    <p><span className="expText">Email: Industriemontage-Langer(@-Zeichen)t-online.de</span></p>

                    <p><span className="expText">Industriemontage Langer GmbH</span></p>
                    <p><span className="expText">An der Trave 24</span></p>
                    <p><span className="expText">23923 Selmsdorf</span></p>

                    <p><span className="expText">Gesellschaft mit beschränkter Haftung, Amtsgericht Schwerin HRB 9434</span></p>
                    <p><span className="expText">Geschäftsführung: Zoltan Langer</span></p>
                </Grid>

            
                 
            </Grid>
            
            
            
            </Grid>
            
    </>
  );
}