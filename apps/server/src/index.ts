import express from "express";
const app  = express()
console.log(process.env.PORT)

// app listening 
try {
    app.listen( process.env.PORT,  () => {
      console.log(`App is listening on the port : ${process.env.PORT}` );
    })

} catch (error) {
  console.log(`Error : ${error}`);
}