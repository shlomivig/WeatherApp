const express = require('express');
const weatherRouter = require('./routers/weatherRouter');
const cityRouter = require('./routers/cityRouter');


var cors = require('cors');
const app = express();

const port = process.env.PORT || 8000

if(process.env.NODE_ENV === "production"){
    app.use(express.static('public'))
}else{
    app.use(cors());
}

app.use(cors());

app.use(express.json())

app.use('/city', cityRouter);
app.use('/weather', weatherRouter);


app.get('/**', (req, res)=>{
    res.sendFile((__dirname, 'public', 'index.html'))
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}!`)
});