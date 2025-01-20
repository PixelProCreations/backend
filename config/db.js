const mongoose = require('mongoose');

const dataBaseConnect = async () => {
    try{
        const connects = await mongoose.connect(process.env.MONGO_URI);
        console.log(`${connects.connection.host}`)
    }
    catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
} 

module.exports = dataBaseConnect;