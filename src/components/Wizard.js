import React from 'react';
import Grid from '@material-ui/core/Grid';

import { ReactTypeformEmbed } from 'react-typeform-embed';



export default function Wizard() {
  return (
    <>
            <Grid
                container
                direction="column"
              
                alignItems="center"
                
                
            >
                

            <ReactTypeformEmbed style={window.innerWidth < 500 ? {top:"50px",height:"calc(100vh - 50px)"} : {top:"50px",height:"80vh"} } className="typeform" url="https://0ocv7asyzfi.typeform.com/to/sEoqMcEW" />;
                
           

            
            </Grid>
    </>
  );
}