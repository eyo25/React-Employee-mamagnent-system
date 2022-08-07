const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');
router.get('/', (req, res) => res.status(200).json({  massge:'Employee route testing!'}));
router.get('/employess', (req, res) => {
    Employee.find()
      .then(Employee=> res.json(Employee))
      .catch(err => res.status(404).json({ nobooksfound: 'No Employees found' }));
  });
  router.get('/', (req, res) => {
    Employee.findById()
      .then(Employee=> res.json(Employee))
      .catch(err => res.status(404).json({ nobooksfound: 'No Employees found' }));
  });
   
  router.post('/add', async (req, res) => {
      const firstname= req.body.firstname
      const lastname=req.body.lastname
      const age= req.body.age
      const salary=req.body.salary
    const employee = new Employee({
        firstname,
        lastname,
        age,
        salary
    })
    try {
        const newEmployee = await employee.save()
        res.status(200).json(newEmployee)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
  /*router.post('/add', (req, res) => {
    const Employess=new Employee(req.body)
    Employess.save()
      .then(Employess => res.json({ msg: 'Employee is Hired' }))
      .catch(err => res.status(400).json({ error: 'Unable to hire this Employee' }));
  });*/
  //Post Method
/*router.post('/post', async(req, res) => {
  const data = new Employee({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Age: req.body.Age,
      Salary: req.body.Salary,
  })

  try {
      const dataToSave =  await data.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})
  */
  router.put('/update/:id', (req, res) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
      .then(Employee => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });
  
  router.delete('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, req.body)
      .then(Employee => res.json({ mgs: 'the employee is terninated' }))
      .catch(err => res.status(404).json({ error: 'No such a Employee' }));
  });
  
  module.exports = router;

