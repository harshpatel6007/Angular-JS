console.log('Hello World');

function greeting(greet) {
    console.log('Entered greetings : ' + greet);
}

greeting('Hello Harsh');

const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

console.log("directoiry name : " + path.join(__dirname, 'asset'));

app.use('/asset', express.static(path.join(__dirname, 'asset')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/lib', express.static(path.join(__dirname, 'lib')));
app.use('/partials', express.static(path.join(__dirname, 'partials')));

app.get('/', (request, respose) => {
    respose.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

