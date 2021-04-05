require('dotenv').config();
const Express=require("express");
const app=Express();
const db=require("./db")

const controllers=require('./controllers/index')
app.use(Express.json());

app.use("/user",controllers.userC);
app.use("/dog",controllers.dogC);
app.use("/profile",controllers.profileC);
app.use("/like",controllers.likeC);
// app.use("/group",controllers.groupC);

db.authenticate()
    .then(()=>db.sync())
    // .then(()=>db.sync({force:true}))
    .then(()=>{
        app.listen(process.env.PORT,console.log(`[server]: listening on localhost${process.env.PORT}`))
    })
    .catch(err=>{
        console.log('[server]: server crashed')
        console.log(err)
    })