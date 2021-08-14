import React, { Component } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import TextValidator from './TextValidator';
import { Autocomplete } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const bloodGroups = [
  { key: 'A+',value: 'A+'},
  { key: 'O+',value: 'O+'},
  { key: 'B+',value: 'B+'},
  { key: 'AB+',value: 'AB+'},
  { key: 'A-',value: 'A-'},
  { key: 'O-',value: 'O-'},
  { key: 'B-',value: 'B-'},
  { key: 'AB-',value: 'AB-'},
];

const levels = [
  { key: '7',value: '7'},
  { key: '8',value: '8'},
  { key: '9',value: '10'},
  { key: '10',value: '10'},
  { key: '11',value: '11'},
  { key: '12',value: '12'},
  { key: '13',value: '13'},
];

export class EmployeeData extends Component {

  constructor(props) {
    super(props);
    this.state = {
        employee : {
            empId: "",
            fName: "",
            dob: "",
            mobNum: "",
            doj: "",
            post: "",
            basicPay: "",
            pan: "",
            permanentAddress: "",
            lName: "",
            gender: "",
            email: "",
            level: "",
            bloodGroup: "",
            houseAllowance: "",
            aadhar: "",
            presentAddress: "",
            fieldName:"",
            value:"",
            submitError : ""
        }
        
    };
  }

  fieldRef = React.createRef();
  form = React.createRef()

  async componentDidMount() {
    
    this.addcustomValidation();

}

componentWillUnmount()
{
    this.removeCustomValidationRule()
   
}

 //adds custom validation to fields
addcustomValidation()
{

ValidatorForm.addValidationRule("onlyAlpha", (val) => {
  
  var regex = /^[A-Za-z]+$/
  var isValid = regex.test(val);
        if (isValid) {
          return true;
        }
        return false;
      });

ValidatorForm.addValidationRule("gender", (val) => {

   if(val!='' && (val=='M' || val=='F' || val=='ND'))
   {
      return true;
   }
      return false;
  });

  ValidatorForm.addValidationRule("onlyAlphaAndSpace", (val) => {
  
    var regex = /^[a-zA-Z\s]*$/
    var isValid = regex.test(val);
          if (isValid) {
            return true;
          }
          return false;
        });

  ValidatorForm.addValidationRule("onlyAlphaNumeric", (val) => {
  
          var regex = /^[A-Za-z0-9]+$/
          var isValid = regex.test(val);
                if (isValid) {
                  return true;
                }
                return false;
              });

  ValidatorForm.addValidationRule("dateFormat", (val) => {
    let splitDate = val.split("/")

          var regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
          var isValid = regex.test(val);
                if (isValid && splitDate[0]<="31" && splitDate[1]<="12") {
                  return true;
                }
                return false;
              });

    ValidatorForm.addValidationRule("ageValidate", (val) => {
                let today = new Date();
                let year = today.getFullYear()
                let splitDate = val.split("/")            
                            if (parseInt(year)-parseInt(splitDate[2])>=20) {
                              return true;
                            }
                            return false;
                          });

}

//removes the added custom validation to fields
removeCustomValidationRule(){

ValidatorForm.removeValidationRule("onlyAlpha");
ValidatorForm.removeValidationRule("gender");
ValidatorForm.removeValidationRule("onlyAlphaAndSpace");
ValidatorForm.removeValidationRule("onlyAlphaNumeric");
ValidatorForm.removeValidationRule("dateFormat");
ValidatorForm.removeValidationRule("ageValidate");
}

//sets value to fields when onChange
handle_change(event) {
    
    const { employee } = this.state;
    employee[event.target.name] = event.target.value;
    this.setState({
        employee
    })
}

//onClicking the Cancel button
cancel = ()=>{
 this.props.cancelAddEmployee()
}

//onForm Submit (*Currently no action performed)
submitForm = ()=>{
  console.log(this.form)
    console.log("Submitted")
}

//sets value for the Select box
setValue = (newValue,fieldName) => {
  const { employee } = this.state;
  if(newValue){
    employee[fieldName] = newValue.value;
  } else {
    employee[fieldName] = "";
  }    
    this.setState({
        employee
    },()=>console.log(employee))
}

  render() {

    const { employee } = this.state;
    return (

      <div style={{width:"50%",margin:"0 auto"}}>
      {this.state.submitError?<div>Form has invalid input data, please correct the errors and submit again!!!</div>:""}
      <br/>
      <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs>
        <ValidatorForm
        onError = {() => {this.setState({submitError:true})}}
        onSubmit={()=>{this.setState({submitError:false})}}
        instantValidate={true}
        ref={(r) => { this.form = r;}}
        >
          <Paper style={{padding:'50px'}}>
          <div>
      <TextValidator
      label="Emp No#"
      name="empId"
      value={employee.empId}
      validators={['required']}
      errorMessages={['This field is required']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Firstname"
      name="fName"
      value={employee.fName}
      validators={['required','onlyAlpha','minStringLength:1','maxStringLength:50']}
      errorMessages={['This field is required','Please input alphabet only!!','Input between 1 to 50 characters!!','Input between 1 to 50 characters!!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Lastname"
      name="lName"
      value={employee.lName}
      validators={['required','onlyAlpha','minStringLength:1','maxStringLength:50']}
      errorMessages={['This field is required','Please input alphabet only!!','Input between 1 to 50 characters!!','Input between 1 to 50 characters!!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Date of Birth"
      name="dob"
      value={employee.dob}
      validators={['required','dateFormat','ageValidate']}
      errorMessages={['This field is required','Please input valid date in dd/mm/yyyy format','Please  enter a valid date , age must be >=20']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Gender"
      placeholder="Enter M,F or ND"
      name="gender"
      value={employee.gender}
      validators={['required','gender']}
      errorMessages={['This field is required','Please input valid gender!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Mobile Num"
      name="mobNum"
      value={employee.mobNum}
      validators={['required','isNumber','maxStringLength:10']}
      errorMessages={['This field is required','Please input numeric only!','Please input 10 numbers only!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Email(Personal)"
      name="email"
      value={employee.email}
      validators={['required', 'isEmail']}
      errorMessages={['this field is required', 'Please input valid email!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Joining Date"
      name="doj"
      value={employee.doj}
      validators={['required','dateFormat']}
      errorMessages={['This field is required','Please input valid date in dd/mm/yyyy format']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <Autocomplete
      id="level"
      options={levels}
      getOptionLabel={(option) => option.key}
     onChange={(event, newValue) => {
      this.setValue(newValue,"level");
    }}
      style={{ width: 300 }}
      renderInput={(params) => <TextValidator {...params} label="Employee Level" variant="outlined"
      name="level"
      value={employee.level}
      onChange={this.handle_change.bind(this)}
      validators={['required']}
      errorMessages={['This field is required']}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      />}
    />
      <TextValidator
      label="Post"
      name="post"
      value={employee.post}
      validators={['required','onlyAlphaAndSpace','maxStringLength:30']}
      errorMessages={['This field is required','Please input only alphabet and space!','Please input within 30 characters']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <Autocomplete
      id="bloodGroup"
      options={bloodGroups}
      getOptionLabel={(option) => option.key}
     onChange={(event, newValue) => {
      this.setValue(newValue,"bloodGroup");
    }}
      style={{ width: 300 }}
      renderInput={(params) => <TextValidator {...params} label="Blood Group" variant="outlined"
      name="bloodGroup"
      value={employee.bloodGroup}
      onChange={this.handle_change.bind(this)}
      validators={['required']}
      errorMessages={['This field is required']}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      />}
    />
      <TextValidator
      label="Basic pay"
      name="basicPay"
      value={employee.basicPay}
      validators={['required','isNumber','minStringLength:3','maxStringLength:8']}
      errorMessages={['This field is required','Please input numeric only!','Please input  between 3 to 8 characters!','Please input  between 3 to 8 characters!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="House Allowance"
      name="houseAllowance"
      value={employee.houseAllowance}
      validators={['required','isNumber','minStringLength:3','maxStringLength:5']}
      errorMessages={['This field is required','Please input numeric only!','Please input  between 3 to 5 characters!','Please input  between 3 to 5 characters!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Pan Card No"
      name="pan"
      value={employee.pan}
      validators={['onlyAlphaNumeric','maxStringLength:10']}
      errorMessages={['Please input alphanumeric only!','Please input 10 numbers only!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Aadhar Card No"
      name="aadhar"
      value={employee.aadhar}
      validators={['isNumber','maxStringLength:12']}
      errorMessages={['Please input numeric only!','Please input 12 numbers only!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      label="Permanent Address"
      multiline
      rows={4}
      validators={['maxStringLength:200']}
      errorMessages={['Text should not exceeds 200 characters!']}
      name="permanentAddress"
      value={employee.permanentAddress}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
      <TextValidator
      multiline
      rows={4}
      label="Present Address"
      name="presentAddress"
      value={employee.presentAddress}
      validators={['maxStringLength:200']}
      errorMessages={['Text should not exceeds 200 characters!']}
      onChange={this.handle_change.bind(this)}
      margin="normal"
      variant="outlined"
      ref={this.fieldRef}
      style={{ width: '100%' }}
      />
</div>
          </Paper>
          <div style={{paddingLeft:'120px',paddingTop:'10px'}}>
          <Button type="submit" variant="contained" color="primary">Submit</Button> &nbsp;
          <Button onClick={this.cancel} variant="contained">Cancel</Button>
          </div>
          </ValidatorForm>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
      </div>      
    )
  }
}
