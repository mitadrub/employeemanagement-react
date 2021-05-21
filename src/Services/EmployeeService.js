import axios from 'axios';

const EMPLOYEE_BASE_REST_URL = 'http://localhost:8080/api/v1/employee';

class EmployeeService {
    
    getEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_URL, employee)
    }
}

export default new EmployeeService()