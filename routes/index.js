/*
    File name: index.js
    name: Simran
    Student id: 300991457
    date: 16 feb, 2019
*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/aboutme', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
module.exports = router;
