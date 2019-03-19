const path = require('path');

const express = require('express');
const hbs = require('hbs');
const chalk = require('chalk');

const app = express();
const port = process.env.PORT || 3000;

const publicFolderPath = path.join(__dirname, '../public');
const viewsFolderPath = path.join(__dirname, '../views');
const partialsFolderPath = path.join(__dirname, '../views/partials');

hbs.registerPartials(partialsFolderPath);

app.use(express.static(publicFolderPath));
app.set('view engine', 'hbs');
app.set('views', viewsFolderPath);

app.get('', (req, res) => {
    // const weatherBody = req.query.address ? req.query.address : 'No address provided!';

    res.render('index', {
        title: 'Weather',
        creatorName: 'Stefan Tochev',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        creatorName: 'Stefan Tochev',
        currentYear: new Date().getFullYear()
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        creatorName: 'Stefan Tochev',
        currentYear: new Date().getFullYear()
    });
});

app.get('/weather', (req, res) => {
    res.send('<h1>Weather Page</h1>');
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        '404Body': 'Help article not found',
        creatorName: 'Stefan Tochev',
        currentYear: new Date().getFullYear()
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        '404Body': 'Page not found',
        creatorName: 'Stefan Tochev',
        currentYear: new Date().getFullYear()
    });
});


app.listen(port, () => {
    console.log(chalk.greenBright.bold.inverse(`The server is up on port ${port}`));
});
