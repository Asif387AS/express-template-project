import express from "express";
import path from 'path'
const __dirname = path.resolve();
// import views from './views'
var app = express();
// require('dotenv').config()
import dotenv from 'dotenv' 
import web from './routes/web.js'
dotenv.config();
const PORT=process.env.PORT || 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static(__dirname));
app.use('/public',express.static(path.join(__dirname, "public")));
app.set('/views', path.join(__dirname, 'views'));
app.get('/*', web)
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`))




