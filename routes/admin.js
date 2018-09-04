/****swati*****/
var fs = require('fs');
var express = require('express');
exports.addfriend = function(req, res){
  var message  = '';
  var errormsg = '';
  if(req.method == "POST"){
    var post   = req.body;
    var email  = post.email;
    var pass   = post.password;
    var fname  = post.first_name;
    var lname  = post.last_name;
    var mob    = post.mob_no;
    var gender = post.gender;

    //req.checkBody('fname', 'First Name is required').isLength({ min: 3 }).trim().isAlpha();
    req.check('first_name', 'First Name is required').notEmpty();
    req.check('last_name', 'Last Name is required').notEmpty();
    req.check('mob_no', 'Mobile Number is required').notEmpty();
    //req.checkBody('mob_no', 'Mobile Number is required').isLength({ min: 10 });
    req.check('email', 'Email is required').isEmail();
    req.check('password', 'Password is required').notEmpty();
    req.check('gender', 'Gender is required').notEmpty(); 

    
    var errors = req.validationErrors();

    if (errors) { 
      return res.render('add_friend.ejs', { errormsg: errors ,message: message});
    }else{
      var sql0 = "SELECT max(user_id) as user_id FROM users";
        // console.log(sql0);
      var query0 = db.query(sql0, function(err, result0) {
          //console.log(result0);        
        var user_id = result0[0].user_id +1;
          //console.log(user_id);
        var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`email`, `password`, `gender`, `user_id`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + email + "','" + pass + "', '"+gender+"','"+user_id+"')";
          //console.log(sql);
        var query = db.query(sql, function(err, result) {
            //console.log(err);
          var message = "Succesfully! Your account has been created.";     
            return res.render('add_friend.ejs', { errormsg: errormsg ,message:message});
        });    
      });
    }
              
    }else{
      return res.render('add_friend.ejs', { errormsg: errormsg ,message:message});
    } 
  };

exports.editfriend = function(req, res){
  var message  = '';
  var errormsg = '';
  if(req.method == "POST"){
    var post   = req.body;
    var email  = post.email;
    var pass   = post.password;
    var fname  = post.first_name;
    var lname  = post.last_name;
    var mob    = post.mob_no;
    var gender = post.gender;

    //req.checkBody('fname', 'First Name is required').isLength({ min: 3 }).trim().isAlpha();
    req.check('first_name', 'First Name is required').notEmpty();
    req.check('last_name', 'Last Name is required').notEmpty();
    req.check('mob_no', 'Mobile Number is required').notEmpty();
    //req.checkBody('mob_no', 'Mobile Number is required').isLength({ min: 10 });
    req.check('email', 'Email is required').isEmail();
    req.check('password', 'Password is required').notEmpty();
    req.check('gender', 'Gender is required').notEmpty(); 

    
    var errors = req.validationErrors();

    if (errors) { 
      return res.render('add_friend.ejs', { errormsg: errors ,message: message});
    }else{
      var sql0 = "SELECT max(user_id) as user_id FROM users";
        // console.log(sql0);
      var query0 = db.query(sql0, function(err, result0) {
          //console.log(result0);        
        var user_id = result0[0].user_id +1;
          //console.log(user_id);
        var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`email`, `password`, `gender`, `user_id`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + email + "','" + pass + "', '"+gender+"','"+user_id+"')";
          //console.log(sql);
        var query = db.query(sql, function(err, result) {
            //console.log(err);
          var message = "Succesfully! Your account has been created.";     
            return res.render('add_friend.ejs', { errormsg: errormsg ,message:message});
        });    
      });
    }
              
    }else{
      return res.render('add_friend.ejs', { errormsg: errormsg ,message:message});
    } 
  };
exports.removefriend = function(req, res){

  var message  = '';
  if(req.method == "GET"){
     var ids = req.params.id;
      //console.log(ids);

        var sql = "DELETE FROM `users` WHERE id = '"+ids+"'";
          //console.log(sql);
        var query = db.query(sql, function(err, result) {

           var sql="SELECT * FROM `users`";
       db.query(sql, function(err, results){
       var message = "Succesfully! You removed your friend."; 
       
       res.render('friends.ejs', {data:results,  message:message});   
      
    }); 

            //console.log(err);
              
           // return res.render('friends.ejs', { message:message});
        }); 
      }        
    // }else{
    //   return res.render('friends.ejs', { message:message});
    // } 
  };  