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
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res) => {
            this.setState({employees:res.data});
        }
        );
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');

    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({employees:this.state.employees.filter(employee => employee.id !== id)})
        })
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List of Employees</h2>
                <div>
                    <button style={{marginTop: "-50px"}} className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
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
                                        <td>
                                            <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-dark">View Detail</button>
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