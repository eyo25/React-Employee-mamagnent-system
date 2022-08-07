import React  ,{ useState, useEffect }from 'react'
import ViewForm from './ViewForm'
import axios from 'axios'
const ManageEmployee = () => {
    const [formValues, setFormValues] = useState([])
      //onSubmit handler
  const OnSubmit = (studentObject) => {
    

    useEffect(() => {
        axios
          .get("http://localhost:8082/api/Employee/employess")
          .then(({ data }) => {
            setFormValues(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
  return (
    <div>
        <ViewForm
      initialValues={formValues}
      onSubmit={OnSubmit}
      enableReinitialize
    >
      Update Student
    </ViewForm>
        </div>
  )
}
}
export default ManageEmployee