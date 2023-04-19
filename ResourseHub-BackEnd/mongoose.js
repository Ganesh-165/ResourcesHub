const express = require('express');
const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb+srv://ganesh:ganesh2003@cluster0.nixttey.mongodb.net/?retryWrites=true&w=majority')

const db = connection.useDb('ResourceHub')

module.exports = {db}