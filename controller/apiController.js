const StudentModel = require('../model/studentModel');

exports.index = (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            res.status(200).json({
                status: 'success',
                result: data,
                message: "Data Fetched"
            });
        } else {
            res.status(404).json({
                status: "error",
                result: err,
                message: "Something Went Wrong"
            });
        }
    });
}

exports.registration = (req, res) => {
    res.render("student-reg", {
        title: "Student Registration"
    });
}

exports.registerStudent = (req, res) => {
    StudentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contact: req.body.contactNumber,
        email: req.body.email,
        course: req.body.course,
        fees: req.body.fees,
    }).save().then(result => {
        res.status(201).json({
            status: 'success',
            result: result,
            message: 'Data Added!!!'
        });
    }).catch(error => {
        res.status(404).json({
            result: error
        });
    })
}

exports.update = (req, res) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (!error) {
            res.status(200).json({
                status: 'success',
                result: data,
                message: "Data Fetched For Update"
            });
        } else {
            res.status(404).json({
                status: "error",
                result: err,
                message: "Something Went Wrong"
            });
        }
    })
}

exports.updateStudent = (req, res) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contact: req.body.contactNumber,
        email: req.body.email,
        course: req.body.course,
        fees: req.body.fees
    }).then(result => {
        res.status(201).json({
            status: 'success',
            result: result,
            message: 'Data Updated!!!'
        });
    }).catch(error => {
        res.status(404).json({
            result: error
        });
    });
}

/* Hard Delete */

exports.delete = (req, res) => {
    StudentModel.findByIdAndRemove(req.params.id).then(result => {
        res.status(201).json({
            status: 'success',
            result: result,
            message: 'Data Deleted!!!'
        });
    }).catch(error => {
        res.status(404).json({
            result: error
        });
    });
}