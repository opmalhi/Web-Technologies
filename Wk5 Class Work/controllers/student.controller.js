const Student = require('../models/student.model');

exports.test = (req,res)=>{
    res.send('Greetings from the Test Controller');
}

exports.student_create = (req,res)=>{
    let student = new Student({
        regNo: req.body.regNo,
        name: req.body.name,
        gender: req.body.gender,
        department: req.body.department,
        semester: req.body.semester,
        section: req.body.section
    });

    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.send('Student Details Add Successfully');
    })
}

exports.student_detail = function (req, res) {
        Student.findById(req.params.id, function (err, student) {
            if (err){
        return next(err);  
    } 
            res.send(student);
        })
    };

exports.student_update = (req,res)=>{
    Student.findByIdAndUpdate(req.params.id, {$set:req.body}, (err, student)=>{
        if(err){
            return next(err);
        }
        res.send('Student Details Updated.');
    });   
}

exports.student_delete = (req,res)=>{
    Student.findByIdAndDelete(req.params.id, (err)=>{
        if(err){
            return next(err);
        }
        res.send('Student Details Deleted!!');
    });
}

