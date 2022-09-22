const express = require('express');

const mongoose = require('mongoose'); 

const port = process.env.PORT || 3000;


mongoose.connect("mongodb://localhost/TechNewsDataBase",{

    useNewUrlParser: true,
    useUnifiedTopology: true,

});

mongoose.connection.on('open',function(){  console.log(' database connected ...')  })


const userRoute = require('./routes/user.route');

const newsRoute = require('./routes/news.route');

const app = express();

app.use(express.json())

app.use('/img', express.static('uploads/images'));

app.use('/user',userRoute);

app.use('/news',newsRoute);



app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });