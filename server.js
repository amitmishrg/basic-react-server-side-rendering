import path from 'path'
import express from 'express'

import handleRender from './utils/handleRender'

const app = express()
const port = 5000

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// This is fired every time the server side receives a request
app.use(handleRender)

app.listen(port)
