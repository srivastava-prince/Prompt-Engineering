const express = require('express')
const UserRouter = require('./routers/userRouter');
require('./connection');
const cors = require('cors');
const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/user', UserRouter);


app.get('/', (req, res) => {
    res.send('response from the server');
});

//start the server 
app.listen(port, () => {
    console.log('server started');

});