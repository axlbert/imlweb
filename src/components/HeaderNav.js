import React from 'react';
import Grid from '@material-ui/core/Grid';

import firmenlogo from '../img/firmelogo.png';



export default function HeaderNav(props) {
  

  return (
    <div>
            <Grid style={{position: "absolute",top: "10px"}} container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
                
                    
                    <img src={firmenlogo} alt="firmenlogo" style={{maxWidth:"200px",marginLeft: "10px"}} onClick={() => props.handleClick("cat1")}/>
                
                    
                    <span className="headerNav" onClick={() => props.handleClick("cat2")}>Angebot anfragen</span>
                
                    
                    <span className="headerNav" onClick={() => props.handleClick("cat6")}>Gute Argumente</span>
                
                
                    
                    <span className="headerNav" onClick={() => props.handleClick("cat5")}>Kontakt</span>
                
            </Grid>
    </div>
  );
}