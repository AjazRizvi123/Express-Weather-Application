const { urlencoded } = require('body-parser');
const express= require('express');
const app= express();
const port =5500;
const hbs= require('hbs')
const path= require('path');


app.use('/static', express.static('static'));
app.use(urlencoded());
app.set('view engine', 'hbs')
const templatepath= path.join(__dirname, "template/views");
const partialpath= path.join(__dirname, "template/partials")
app.set('views', templatepath);
hbs.registerPartials(partialpath);




app.get("/", (req,res)=>{
    res.status(200).render('index.hbs')
});

app.get("/about", (req, res)=>{
   res.status(200).render('about.hbs')
})

app.get("/weather", (req, res)=>{
    res.status(200).render('weather.hbs')
});

app.get("*", (req, res)=>{
    res.status(200).render("error.hbs")
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)  
})