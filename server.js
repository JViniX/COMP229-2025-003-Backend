var express = require('express');
var app = express();

function logger(req, res, next){
    console.log(req.method, req.url);

    next();
}

function helloWorld(req, res, next) {
    res.send('Hello World!');
};

function goodbye(req, res, next) {
    res.send('Goodbye, guys!');
};

const userObj = {
    name: 'John Smith',
    email: 'john@smith.com'
}

app.get('/user', (req, res) => {
    res.json(userObj);
})

app.get('/user/:userId', (req, res)=>{
    console.log(req.params.userId);

    res.json(
        {
            userid: req.params.userId,
            firstName: 'John',
            lastName: 'Smith'
        }
    )
});

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbye);

app.listen(3000);

console.log('Server running at http://localhost:3000/');