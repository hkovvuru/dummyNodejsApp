const express = require('express');
const bodyparser = require('body-parser');
const route = require('../api/route');

const app = express();
//const route = express.Router();


app.use(bodyparser.json());
app.use('/api', route);

let employees = [
    {
        firstname: 'Hussain',
        lastname: 'kovvuru',
        empID: 1
    },
    {
        firstname: 'ravi',
        lastname: 'teja',
        empID: 2
    }
]
route.get('/', (req, res) => {
    res.send(employees);
});

route.post('/', (req, res) => {
    let employees = req.body;
    res.json(employees);
    

});

route.put('/', (req, res) => {
    res.json(employee);
});

route.delete('/:id', (req, res) => {
        let empID = req.params.id;
        employee.pop(empID);
        res.json(employee);
});

app.listen(9000, () => {
    console.log('server is started at port 9000');
})