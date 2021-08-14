import React, { Component } from 'react';
import {EmployeeList} from '../../../components/EmployeeList'
import Button from '@material-ui/core/Button';

export class Home extends Component {


    addEmployee = ()=>{
        this.props.addEmployee();
    }
    getSelectedEmployee = (eid) => {
        this.props.selectedEmployee(eid);
}

render()
{
    return(
        <div>
        <div style={{paddingLeft:'50px',paddingTop:'50px'}}>
        <Button onClick={this.addEmployee} variant="contained">Add New Employee</Button> &nbsp;
        </div>
        <EmployeeList selectedEmployee = {this.getSelectedEmployee}/>
        </div>

    )
}
}
