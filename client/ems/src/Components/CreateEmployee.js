import React ,{ useState, useEffect }from 'react'
import axios from 'axios';
import HireEmployee from './HireEmployee';
const CreateEmployee = () => {
    const [formValues, setFormValues] = 
    useState({ firstname: '', lastname: '', age: '' ,salary: ''})
  // onSubmit handler
  const onSubmit = employeeObject => {
    axios.post(
'http://localhost:8082/api/Employee/add', 
    employeeObject)
      .then(res => {
        if (res.status === 200)
          alert('Employee successfully Hired')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
  return (
    <div>

    <HireEmployee initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Hire Employee
    </HireEmployee>
    </div>
  )
}

export default CreateEmployee