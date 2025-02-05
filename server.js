const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./recipeRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware 
app.use(express.json());

//Routes
app.use('/api/recip', recipeRoutes);

//Connect to MongoDBegijerogij
mongoose.connect(process.env.MONGO_URI)
.then(()=> {
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((err) => console.log(err));