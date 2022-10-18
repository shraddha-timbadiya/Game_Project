const mongoose = require('mongoose')

mongoose.connect( 'mongodb://localhost:27017/game',{
    useNewUrlParser:true,
    useUnifiedTopology:true  
  }).then(()=>{
      console.log('db connection successful')
  }).catch(()=>{
      console.log('no connection')
  })
  