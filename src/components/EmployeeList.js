import React, { Component } from 'react';
import data from '../data/employee_list.json';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import photo from '../images/profile.jpg'; 

let rows = [];
data.data.forEach((e)=>{rows.push(e)})
console.log(rows)


export class EmployeeList extends Component {

    //OnClicking the Details Link
    onSelectEmployee = (eid) => {
        this.props.selectedEmployee(eid);
    }

    render()
    {
        return (
            <TableContainer>
            <Table stickyHeader style={{padding: '55px'}}>
            <TableHead>
                  <TableRow>
                  <TableCell>Employee</TableCell>
                  <TableCell align="right">Contact</TableCell>
                  <TableCell align="right">Level & Post</TableCell>
                  <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row,i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                      <img src={photo} alt="pic" style={{height:'50px',width:'50px'}}/>
                      {row.firstName}{" "}{row.lastName}<br/>#{row.empId}
                      </TableCell>
                      <TableCell align="right">{row.contactNum}<br/>{row.emailAddress}</TableCell>
                      <TableCell align="right">{row.level}/<br/>{row.post}</TableCell>
                      <TableCell align="right">
                      <button type="button" onClick={()=>{this.onSelectEmployee(row.empId)}}
                      style={{background: 'none',
                        border: 'none',color: '#069',
                        textDecoration: 'underline',
                        cursor: 'pointer'}}>
                      Details
                  </button></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
    }
}
