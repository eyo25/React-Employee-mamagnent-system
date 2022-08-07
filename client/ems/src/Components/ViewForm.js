import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const ViewForm = (props) => {
    const { _id, firstname, lastname, age, salary } = props.obj;
    const deleteStudent = () => {
    axios.delete(
       "http://localhost:8082/api/Employee/delete/" + _id)
    .then((res) => {
      if (res.status === 200) {
        alert("Employee successfully fired");
        window.location.reload();
      } else Promise.reject();
    })
    .catch((err) => alert("Something went wrong"));
};
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{salary}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-student/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default ViewForm