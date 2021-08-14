import React, { Component } from 'react';
import {EmployeeDetails} from '../../../components/EmployeeDetails'

export class ViewDetails extends Component {

    backToHome = ()=>{
        this.props.backToHome()
    }

    render()
    {
        return(

            <EmployeeDetails selectedEmployeeID = {this.props.selectedEmployee} backToHome={this.backToHome}/>
          
        )
    }
}