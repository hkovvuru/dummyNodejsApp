const Schema = mongoose.Schema;
//using nodejs 'require
const mongoose = require('mongoose');
//using ES6 'import
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/my_database', )
//creating schema and model
const mySchema = new Schema({
    name: {
        type: string,
        required: [true, 'name filed is required'],
    },
    id: {
        type: number
    }

});

const Person = mongoose.model(person,mySchema);

module.exports = Person;

