const mongoose =require('mongoose');
const {db} = require('./mongoose.js')

const sslcSchema = new mongoose.Schema({
    Year : {
        required:true,
        type:String
    },
    Exam_Type : {
        required:true,
        type:String
    },
    Subject : {
        required:true,
        type:String
    },
    Medium : {
        required:true,
        type:String
    },
    Link : {
        type:String
    }
})

const hscSchema = new mongoose.Schema({
    Standard : {
        required:true,
        type:String
    },
    Year : {
        required:true,
        type:String
    },
    Exam_type : {
        required:true,
        type:String
    },
    Subject : {
        required:true,
        type:String
    },
    Medium : {
        required:true,
        type:String
    },
    Link : {
        type:String
    }
})

const neetSchema = new mongoose.Schema({
    Year : {
        required:true,
        type:String
    },
    Month : {
        required:true,
        type:String
    },
    Shift : {
        required:true,
        type:String
    },
    Link : {
        type:String
    }
})

const jeeSchema = new mongoose.Schema({
    Year : {
        required:true,
        type:String
    },
    Type : {
        required:true,
        type:String
    },
    Month : {
        required:true,
        type:String
    },
    Shift : {
        required:true,
        type:String
    },
    Link : {
        type:String
    }
})



module.exports = {
    sslc : db.model('sslc',sslcSchema,'SSLC'),
    hsc : db.model('hsc',hscSchema,'HSC'),
    neet : db.model('neet',neetSchema,'NEET'),
    jee : db.model('jee',jeeSchema,'JEE')
}