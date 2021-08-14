import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export class Header extends Component {
  
    render()
    {
    return(
        <div>
        <Typography component="h1" variant="h6" style={{ color: '#ffffff', backgroundColor: '#074a85'}}>
        <div style={{paddingLeft:"45%"}}>{this.props.headerName}</div>
        </Typography>      
        </div>

    )
}
}