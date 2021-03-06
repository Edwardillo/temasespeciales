var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.get('/', function(req, res, next) {
  var o = {};
  o.map = function () {
  var id = this._id
  var arr = this.comment.split(" ")
  arr.forEach(function(single){
    emit(single,1)
    })
  }
  o.reduce = function (k, vals) {
    return vals.length
  }
    var promise = mongoose.model('Comment').mapReduce(o);
    promise.then(function (model, stats){
      return model.find().sort('value');
    }).then(function(docs){
      console.log(docs)
    })

    // mongoose.model('Comment').mapReduce(o).opt({sort:'value'}).exec(function(err,results){
    //   console.log(results);
       res.render('most', { title: 'Most Used Words'});
    // })




})

module.exports = router;
//   var modelo = mongoose.model('Comment')
//   var o = {};
//   o.map = function(){
//     modelo.forEach(function(c){
//     console.log(c);
//     var key = {
//       nombre: c.name,
//       texto: c.comment
//     }
//     emit(key,c)
//   })
// }
//   o.reduce = function(key,values){
//     var count = 0;
//     values.forEach(function(v){
//       count += 1;
//     })
//     return count
//   };
//   modelo.mapReduce(o,function(err,results){
//     console.log(results);
//     res.render('most', { title: 'Most Used Words',
//                           "users": results});
//   })

//});
