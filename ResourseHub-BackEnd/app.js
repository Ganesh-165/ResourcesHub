const express = require('express')
const app = express()
const {sslc} = require('./Schema.js')
const {hsc} = require('./Schema.js')
const {neet} = require('./Schema.js')
const {jee} = require('./Schema.js')
const cors = require('cors');

app.use(express.json())
app.use(cors())


app.post('/sslc',async(req,res) => {
    const{year,examtype,subject,medium} = req.body
    const answerarray = await sslc.find(
        { $and: [ { Year: year }, { Exam_Type: examtype}, {Subject: subject}, {Medium : medium} ] }
    )
    if(answerarray.length===0){
        return res.send('No Data Found')
    }
    const ans = answerarray[0].Link
    res.send(ans)
}
)

app.post('/hsc',async(req,res) => {
    const{standard,year,examtype,subject,medium} = req.body
    const answerarray = await hsc.find(
            { $and: [ { Standard: standard}, { Year: year}, {Exam_Type:examtype},{Subject: subject}, {Medium : medium} ] }
        )
    if(answerarray.length===0){
        return res.send('No Data Found')
    }
    const ans = answerarray[0].Link
    res.send(ans)
}
)

app.post('/neet',async(req,res) => {
    const{year,month,shift} = req.body
    const answerarray = await neet.find(
            { $and: [ { Year: year}, { Month: month}, {Shift: shift} ] }
        )
    if(answerarray.length===0){
        return res.send('No Data Found')
    }
    const ans = answerarray[0].Link
    res.send(ans)
    }
)



app.post('/jee',async(req,res) => {
    const{year,type,month,shift} = req.body
    const answerarray = await jee.find(
        { $and: [ { Year: year},{Type: type}, { Month: month}, {Shift:shift} ] }
    )
    if(answerarray.length===0){
        res.send('No Data Found')
        return;
    }
    const ans = answerarray[0].Link
    res.send(ans)
}
)

app.listen(5000,() => {
    console.log('Server Listening To Port NUmber 5000...')
})