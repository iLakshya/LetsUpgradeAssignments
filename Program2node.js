// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log("server is running");
// });

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect(
    "your mongoDB atlas database connection",
    {   useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true})
.then(()=>{
    app.listen(PORT, ()=> console.log("server is running"))
})
.catch(err=>{
    console.log(err);
})