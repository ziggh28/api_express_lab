//s.2.1 import mongoose 
import mongoose from 'mongoose'

// s.2.2 make const Schema 
const Schema = mongoose.Schema

//s.2.3 export student model
export{
    Students
}
// s.2.4 make a studentSchema 
const StudentsSchema = new Schema({
    //s.2.4.1 make a type string for name 
    name: {type: String, required: true},
     
    //s.2.4.2 make a type string for city 
    city:{type: String, default: "Boston"},
     
    //s.2.4.3 make a type number for age 
    age:{type: Number, default:0}
},{

timestamps: true,

});

 //s.2.5 make a const student that holds the mongoose model 
const Students = mongoose.model('Students', StudentsSchema)