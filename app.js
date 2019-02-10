/**
 * @author Hussain Kovvuru
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let root = express.Router();
let admin = express.Router();

//To parse if the data is send in application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //extended:true supports nested objects as well

//To parse if the data is send in application/json
app.use(bodyParser.json());

app.use('/', root);
app.use('/admin', admin);

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

//http://localhost:3000/admin/person?name=Hussain&age=24
admin.get('/person', (req, res, next) => {
    let query = req.query;
    res.send(`<h1>Name is ${query.name} and age is ${query.age}</h1>`);
    res.send('Hussain Requested GET Page ');
    next();
});

admin.post('/person', (req, res, next) => {
    let emp = req.body;
    res.json(emp);
    next();
    //res.send('Hussain Requested POST Page ');
});

root.get('/get', (req, res, next) => {
    res.send(`Hussain Requested  GET method  Page`);

})

root.post('/post', (req, res, next) => {
    let users = req.body;
    res.json(users);
   // res.send(`rootUser Requested  POST method  Page`);

})

root.delete('/del/:id', (req, res, next) => {
    res.send(`rootuser Requested  delete method  Page`);

})

root.put('/put/:id', (req, res, next) => {
    res.send('rootuser Requested root put method Page ');
})

app.listen(3000, () => {
    console.log('server started at port number 3000');
});