import express from 'express';
import cors from 'cors';

// init
const app = express();

// settings
app.set('port',process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// routes
app.get('/',(req,res) => {
    res.send('Hello World');
});

export default app;