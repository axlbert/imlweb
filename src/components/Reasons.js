import React from 'react';
import Grid from '@material-ui/core/Grid';


export default function Reasons() {
  return (
    <>
            <Grid
                container
                direction="column"
                
                alignItems="center"
                className="respWrap"
            >
            <h1 className="siteSubHeadline">
            Kurze Durchlaufzeiten und attraktive Preise - wir lösen Ihr Produktionsproblem
          </h1>
          <span className="pitchText">Unser kleines Team besteht aus Praktikern mit jahrzehntelanger Erfahrung - wir freuen uns auf Ihren Auftrag</span>
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
                    <p><span className="expText"><strong>Preise ohne Verwaltungsaufschläge</strong></span></p>
                    <p><span className="expText">Bei uns zahlen Sie für die Fertigung, nicht die Verwaltung</span></p>

                    <p><span className="expText"><strong>Qualitätsarbeit durch Fachkräfte</strong></span></p>
                    <p><span className="expText">Unsere Mitarbeiter besitzen jahrzehntelange Erfahrung in der Kunststoffbearbeitung</span></p>
              
                    <p><span className="expText"><strong>Schnellste Durchlaufzeiten</strong></span></p>
                    <p><span className="expText">Auf Wunsch bearbeite wir Ihren Auftrag innerhalb weniger Werktage</span></p>
                  
                     
                </Grid>
                <Grid 
                    item
                    xs={11}
                    sm={5}
                    className="cardItem-lg"
                    style={{textAlign: "center",paddingLeft:"10px"}}
                >
                    
                    <p><span className="expText"><strong>Zufriedene Stammkundenbasis</strong></span></p>
                    <p><span className="expText">Der Großteil unserer Kundenbeziehungen ist über jahrzehnte gewachsen.</span></p>
                  
                    <p><span className="expText"><strong>Digitalisierung zu Ihren Diensten</strong></span></p>
                    <p><span className="expText">Wir arbeiten daran, die Zusammenarbeit durch digitale Hilfsmittel stetig zu erleichtern</span></p>
                   
                    <p><span className="expText"><strong>Unmittelbare Problemlösung</strong></span></p>
                    <p><span className="expText">Änder sich Ihre Anforderungen? Kein Problem - Flexibilität ist unsere Stärke</span></p>
                 

                </Grid>

            
                
            </Grid>

            
            </Grid>
    </>
  );
}