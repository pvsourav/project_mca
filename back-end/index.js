const express = require('express');
const cors = require('cors'); 
const app = express();
const usersRouter = require('./routes/indexRoutes');
const bodyParser = require('body-parser');
var db=require('./config/connection')

db.connect((err)=>{
  if(err) console.log('Connection Error'+err)
  else  console.log('Connection Succesfull')
})


app.use(bodyParser.json());
const port = 3000;

app.use(cors());

app.use('/', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
