var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

/* GET home page. */

router.get('/', function(req, res, next) {
  mongoose.model('User').find({counter:{$gt: 0}}).sort({counter:-1}).limit(5).exec(function(err,users){
    if(err){
      res.send("there was an error" + err)
    }else {
      res.format({
        html: function(){
          res.render('top',{
            title: 'Trending 5 Comments',
            'users': users
          });
        },
        json: function(){
          res.json(users);
        }
      });
    }
  });
})

module.exports = router;
