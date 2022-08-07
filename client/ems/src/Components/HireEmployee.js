
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import React, { useState } from "react";



const HireEmployee = () => {
 const[employee ,setemloyee]=useState({firstname: '',lastname:'',age:'',salary: ''})
 

 const addNewEmployee = (employeeobject) => {
  Axios.post('http://localhost:8082/api/Employee/add',employeeobject)
  .then(res => {
    if (res.status === 200)
      alert('Student successfully created')
    else
      Promise.reject()
    })
    .catch(err => alert('Something went wrong'))
}

  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
    <Form>
      <Form.Group className="mb-3 justify-content-center" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control onChange={(e) => {setemloyee(e.target.value)}} type="name" placeholder="Enter your first name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={(e) => {setemloyee(e.target.value)}} type="name" placeholder="Enter your last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control onChange={(e) => {setemloyee(e.target.value)}} type="number" placeholder="Enter your age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control onChange={(e) => {setemloyee(e.target.value)}} type="number" placeholder="Enter salary amount " />
      </Form.Group>
      
      <Button   variant="primary" type="submit"  onClick={addNewEmployee}>
        Hire
      </Button>
    </Form>
    </div>
  )
}

export default HireEmployee