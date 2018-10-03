const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const api = require('./routes/api');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api',api);

app.get('/',(req,res)=>{
    res.send('Hello from the server')
})

app.listen(PORT,()=>{
    console.log('Server running on PORT ' + PORT);
})