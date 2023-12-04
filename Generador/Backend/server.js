const express = require('express');
const cors = require('cors');
const path = require('path');
const tf = require('@tensorflow/tfjs-node');
const PORT = 3000;

const generateRouter = require('./routes/generate_router.js');

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Middleware to parse data from forms HTML of requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());  // for reading application/json
app.use(cors()); // Enable CORS
// Configura Express para servir archivos estáticos desde la carpeta 'Frontend'
app.use(express.static(path.join(__dirname, './../Frontend')));

console.log(__dirname);

app.use('/generate', generateRouter);

// Login 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/Login/Login.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

