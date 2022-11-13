const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(process.env.DB_URI, {
        userNewUrlParser: true, 
        userUnifiedTopology: true, 
    }).then(() => console.log("MongoDB Atlas Conectado!")).catch((err) => console.error(err))
}; 

module.exports = connectToDb; 