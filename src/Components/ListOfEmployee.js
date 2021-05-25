import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ListOfEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees : []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees:res.data});
        }
        );
    }

    addEmployee(){
        this.props.history.push('/add-employee');

    }
    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List of Employees</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}

export default ListOfEmployee;