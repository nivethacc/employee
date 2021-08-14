import React, { Component } from 'react';
import data from '../data/employee_detail_24789.json';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

let rows = [];
rows.push(data)


export class EmployeeDetails extends Component {

    //returns a new array with names and values to be displayed
    setDisplayNames(entries)
    {
        let newEntry = entries.map(entry => {
            if (entry[0] === 'empId'){
                return ['Emp ID',entry[1]];
            }
            if (entry[0] === 'gender'){
                return ['Gender',entry[1]];
            }
            if (entry[0] === 'contactNum'){
                return ['Contact Number',entry[1]];
            }
            if (entry[0] === 'contactNum'){
                return ['Personal Mail',entry[1]];
            }
            if (entry[0] === 'personalMail'){
                return ['Personal Mail',entry[1]];
            }
            if (entry[0] === 'emailAddress'){
                return ['Office Mail',entry[1]];
            }
            if (entry[0] === 'level'){
                return ['Level',entry[1]];
            }
            if (entry[0] === 'post'){
                return ['Post',entry[1]];
            }
            if (entry[0] === 'joiningDate'){
                return ['Date of Joining',entry[1]];
            }
            if (entry[0] === 'dateOfBirth'){
                return ['Date of Birth',entry[1]];
            }
            if (entry[0] === 'bloodGroup'){
                return ['Blood Group',entry[1]];
            }
            if (entry[0] === 'basicPay'){
                return ['Basic Pay',entry[1]];
            }
            if (entry[0] === 'aadharCardNo'){
                return ['Aadhar Card Number',entry[1]];
            }
            if (entry[0] === 'address'){
                return ['Address',entry[1]];
            }
        })

        return newEntry.filter(e=>e!==undefined);
    }

    backToHome = () => {

        this.props.backToHome();
    }

    render()
    {
        let filteredData = rows.filter(e=>e.empId==this.props.selectedEmployeeID)
        let entries;
        let newEntries;
        if(filteredData.length)
        {
             entries = Object.entries(filteredData[0]);
             newEntries=this.setDisplayNames(entries)
        }

        return(
            <div>
            {newEntries?
            <TableContainer>
            <Table stickyHeader style={{padding: '55px'}}>
            <TableHead>
                  <TableRow>
                  <TableCell><div style={{fontWeight:'bold'}}>{data.firstName} {data.lastName}</div>
                  </TableCell>
                  <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newEntries.map((entry,i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                      {entry[0]}
                      </TableCell>
                      <TableCell component="th" scope="row">
                      {entry[1]}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            :<div style={{width:"50%",margin:"0 auto",fontWeight:'bold'}}>"No Employee Details Found!"</div>}
            <div style={{paddingLeft:'820px',paddingTop:'10px',paddingBottom:'10px'}}>
            <Button variant="contained" color="primary" onClick={this.backToHome}>Back</Button> &nbsp;
            </div>
            </div>           
        )
    }
}

