const app = require('./app.js');

const dotenv = require("dotenv");

const connectDatabase = require("./config/database")

//handling uncaught exception

process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
});

//config



dotenv.config({path:"backend/config/.env"});

//CONNECTING TO CONNECTDatabase(): void

connectDatabase();


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 
    console.log(`Server is working on http://localhost:${PORT}`);

});

//unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);


    ServiceWorkerRegistration.close(()=>{
        process.exit(1);
    });
});