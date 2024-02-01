import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.user.js'

dotenv.config();


mongoose.connect(process.env.Mongodb)
.then( () => {
    console.log('MongoDB is connected!');
})
.catch( (error) => {
    console.log('Error is created', error)
})

const app= express();
const port =3000;

app.use(express.json());



app.listen(port, () => {
    console.log(`Server is listening on the port ${port}`)
}
);

app.use('/api/user', userRoute);

app.use('/api/auth',authRoute);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
    
},
)