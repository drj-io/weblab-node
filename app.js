var colors = require('colors/safe');
var ejs = require('ejs');
var express = require('express');
var app = express();



var users = [

  {
    'name'   : 'David',
    'address': '222 W Main Street, Longmont, CO',
    'phone'  : '303-123-4567'
  },
  {
    'name'   : 'Bob',
    'address': '11 Wall Street New York, NY.',
    'phone'  : '555-555-1212'
  },
  {
    'name'   : 'Jerry',
    'address': '2190 Miller Dr, Longmont, CO 80501',
    'phone'  : '970-555-1212'
  }
];






app.set('view engine', 'ejs')

app.get('/hello', function (req, res) {
  console.log("requested page!");
  res.render('index', {users : users });
})

app.post('/process_form', function(req,res){

  res.send('hey, we\'re processing a form!');

})

app.listen(3001);
console.log('hi!');
