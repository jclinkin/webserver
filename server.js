const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        name: 'wirsoN LanniSTer',
        year: new Date().getFullYear()
    });
});
app.listen(port, () => {
    console.log(`Listening request on port ${port}`);
});