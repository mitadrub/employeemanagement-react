import React, { PureComponent } from 'react';


class HomePage extends PureComponent {

    goToEmployeeList(){
        this.props.history.push('/employee');
    }
    
    render() {
        return (
            <div>
                <h1 class="text-lg-center">Welcome To Employee Manager</h1>
                <div class="text-lg-center">Click below link to get the employee list</div>
                <div className="text-lg-center">
                    <button className="btn btn-danger" onClick={this.goToEmployeeList.bind(this)}>Get Employee</button>
                </div>
            </div>
        );
    }
}

export default HomePage;