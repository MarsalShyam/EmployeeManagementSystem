import React from 'react'

const ListEmployeeComponent = () => {
    const dummyData=[
        {
            "id":1,
            "fistName":"shyam",
            "lastName":"kumar",
            "email":"shyam@gmail.com"
        },
        {
            "id":2,
            "fistName":"sganesh",
            "lastName":"kumar",
            "email":"sganesh@gmail.com"
        },
        {
            "id":3,
            "fistName":"ramam",
            "lastName":"kumar",
            "email":"ram@gmail.com"
        },
        {
            "id":4,
            "fistName":"surajam",
            "lastName":"kumar",
            "email":"shyasrdm@gmail.com"
        },
        {
            "id":5,
            "fistName":"shyadfam",
            "lastName":"kumar",
            "email":"shyam@adsgmail.com"
        },
        {
            "id":6,
            "fistName":"shyasdfam",
            "lastName":"kumadsffaar",
            "email":"shyam@asdfgmail.com"
        },

    ]

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
            {dummyData.map(employee =>
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
