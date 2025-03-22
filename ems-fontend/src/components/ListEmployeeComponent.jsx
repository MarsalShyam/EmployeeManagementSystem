import React, {useState,useEffect} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees]=useState([])

    useEffect(()=>{
        listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.log(error);
        })
    },[])

  return (
    <div className='container'>
      <h2 className='text-center'>List of employee</h2>
      <table className='table table-striped'>
        <thead className='thead-dark m-5'>
            <tr>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                </tr>
        </thead>
        <tbody>
            {employees.map(employee =>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.fistName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
