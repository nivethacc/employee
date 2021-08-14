import React, { Component } from 'react';
import { Route, withRouter,Switch } from 'react-router-dom';
import {Home} from './Home/Home';
import {AddEmployee} from './Add/AddEmployee';
import {ViewDetails} from './View/ViewDetails';
import {Header} from '../../components/Header';

class AppRouter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {

            selected_eid: null

        }
    }

    get_selectedEmployee = (eid) => {
        console.log(eid)
        this.setState({
            selected_eid: eid,
        },() => {this.props.history.push("/details")}
        )
    }
    addEmployee = ()=>{
        this.props.history.push("/add")
    }
    cancelAddEmployee = ()=>{
        this.props.history.push("/")
    }
    backToHome = () =>{
        this.props.history.push("/")
    }

    render(){
        console.log(this.props.location.pathname)
        return(
            <div>
            <Header headerName={this.props.location.pathname=='/'?'Employee List':this.props.location.pathname=='/details'?'Employee Details':this.props.location.pathname=='/add'?'Add Employee Record':''}/>
            <Switch>
            <Route path="/" exact render={()=>(<Home selectedEmployee={(eid)=>this.get_selectedEmployee(eid)} addEmployee={this.addEmployee}></Home>)}/>

            <Route path="/details" exact render={(routeProps)=>(<ViewDetails {...routeProps} selectedEmployee = {this.state.selected_eid} backToHome={this.backToHome}/>)}/>

            <Route path="/add" exact render={(routeProps)=>(<AddEmployee {...routeProps}
            cancelAddEmployee={this.cancelAddEmployee}/>)}/>

            </Switch> 
            </div>
        )
    }
}
export default withRouter(AppRouter)