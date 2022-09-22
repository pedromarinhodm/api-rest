import express from 'express';
import mongoose from 'mongoose'
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

mongoose.connect('mongodb+srv://pedromarinho:7828@cluster0.8n5whis.mongodb.net/?retryWrites=true&w=majority')

.then((data)=>{
    console.log('MongoDB ok')
})

.catch((err)=>{
    console.log('MongoDB erro',err.message)
})

app.listen(3333)