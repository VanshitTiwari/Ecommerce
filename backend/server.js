const app = require('./app.js');

const dotenv = require("dotenv");

const connectDatabase = require("./config/database")



//config



dotenv.config({path:"backend/config/.env"});

//CONNECTING TO CONNECTDatabase(): void

connectDatabase();


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 
    console.log(`Server is working on http://localhost:${PORT}`);

});