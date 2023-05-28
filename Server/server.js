const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 8000;
const routes = require('./routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.set('view engine', 'ejs');


app.listen(PORT,()=>{
    console.log(`server start and running at port no ${PORT}`);
})