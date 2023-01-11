const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();

function send(tel)  {
    axios.post(process.env.link,
    {
       channelCode:process.env.code,
       recipientPhoneNumber: tel,
       messageBody: "From DHD"
    },{headers: {
       'Content-Type':'application/json',
       'x-api-key': process.env.ApiKey
     }})
     .then(function (response) {
       console.log(response,"Message sent!");
     })
     .catch( (error)=> {
       console.log(error,"Message not sent,please try again");
     });

}

send("+265991065565")




