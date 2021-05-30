import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data})
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee Name: {this.state.employee.firstName} {this.state.employee.lastName}</label>
                        </div>
                        <div className="row">
                            <label>Email Id: {this.state.employee.emailId}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;