import React, { Component } from 'react';
import { EmployeeData } from '../../../components/EmployeeData';

export class AddEmployee extends Component {

    cancelAddEmployee = () => {
    this.props.cancelAddEmployee()
    }

    render()
    {
        return(
            <EmployeeData eid={this.props.selectedEmployee} cancelAddEmployee={this.cancelAddEmployee}/>
           
        )
    }
}