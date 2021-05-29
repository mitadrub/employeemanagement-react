import axios from 'axios';

const EMPLOYEE_BASE_REST_URL = 'http://localhost:8080/api/v1/employee';

class EmployeeService {
    
    getEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_URL, employee)
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_URL +'/'+employeeId)
    }
    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_BASE_REST_URL+'/'+employeeId,employee)
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_URL+'/'+employeeId)
    }
}

export default new EmployeeService()