// s.5.1 import student models 
import { Students } from '../models/students.js'

// s.5.2 export controller functions
export{
    // s.5.2.1 export index
    index,
    
    // s.5.2.2 export show
    show,
    // s.5.2.3 export create
    
    create,
    // s.5.2.4 export update
    
    update,
    
    // s.5.2.5 export delete
    deleteStudents as delete,
}

//s.5.4 make function for index
function index (req, res){
    
    Students.find({})
        
        .then(studentSei => { 
        
            res.status(200).json(studentSei)
        })
    .catch(err => {
        res.json(err)
    })
}
//s.5.5 make function for show
function show (req, res){

    Students.findById(req.params.id)
        
    .then(studentSei =>{

        res.json(studentSei)

    })
}

//s.5.7 make function for create 
function create (req, res){
    
    Students.create(req.body)
        
        .then(studentSei => {

            res.json(studentSei)
            
        }) 

    .catch(err => {
         res.json(err)

    })
 }


//s.5.6 make function for update 
function update (req, res){
    
    Students.findByIdAndUpdate(req.params.id, req.body, { new: true } )
     
        .then(studentSei => {

            res.json(studentSei)
        
    }) 

}
//s.5.8 make function for delete
function deleteStudents (req, res){

        Students.findByIdAndDelete(req.params.id)

            .then(studentSei => {

                res.json(studentSei)
        
    }) 
    
}