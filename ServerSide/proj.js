const express = require('express');
const app = express();
app.use(express.json());

const router = require('./routes/routes')
app.use(router);
const emailRoutes = require("./routes/email");
app.use(emailRoutes)
const connect = require('./config/connect');
connect();


let port = process.env.PORT
app.listen(port,()=>{console.log(`server is running at http://127.0.0.1:${port}`);
})