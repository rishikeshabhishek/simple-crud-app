const StudentModel = require('../model/studentModel');

exports.index = (req, res) => {
    StudentModel.find((error, data) => {
        if (!error) {
            res.render('student-display', {
                title: 'Student Display',
                displayData: data
            });
        }
    })
}

exports.registration = (req, res) => {
    res.render("student-reg", {
        title: "Student Registration"
    });
}

exports.registerStudent = (req, res) => {
    const Student = new StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contact: req.body.contactNumber,
        email: req.body.email,
        course: req.body.course,
        fees: req.body.fees,
    })
    Student.save().then((result) => {
        console.log(result, "Student Registration Successfull!!!");
        res.redirect('/');
    }).catch((error) => {
        console.log(error);
        res.redirect('/student-reg');
    })
}

exports.update = (req, res) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (!error) {
            res.render('edit-students', {
                title: "Edit Student",
                displayData: data
            })
        } else {
            res.render('/');
        }
    })
}

exports.updateStudent = (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, { firstName: req.body.firstName, lastName: req.body.lastName, address: req.body.address, contact: req.body.contactNumber, email: req.body.email, course: req.body.course, fees: req.body.fees }, (error, data) => {
        if (!error) {
            console.log("Student Update");
            res.redirect('/');
        } else {
            console.log(error);
        }
    });
}

/* Hard Delete */

// exports.delete = (req, res) => {
//     StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
//         if (!error) {
//             res.redirect('/');
//         } else {
//             console.log(error);
//             res.redirect('/');
//         }
//     })
// }

/* Soft Delete */

exports.delete = (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, { status: 0 }, (error, data) => {
        if (!error) {
            res.redirect('/');
        } else {
            console.log(error);
            res.redirect('/');
        }
    })
}