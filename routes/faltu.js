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
    req.checkBody('fname', 'First Name is required').notEmpty();
    req.checkBody('lname', 'Last Name is required').notEmpty();
    req.checkBody('mob', 'Mobile Number is required').notEmpty();
    //req.checkBody('mob', 'Mobile Number is required').isLength({ min: 10 });
    req.checkBody('email', 'Email is required').isEmail();
    req.checkBody('pass', 'Password is required').notEmpty();
    req.checkBody('gender', 'Gender is required').notEmpty(); 

    
    var errors = req.validationErrors();

    if (errors) {
      console.log(errors);  
      return res.render('add_friend.ejs', { errormsg: errors ,message: message});
    }else{

       var sql0 = "SELECT max(user_id) as user_id FROM users";
            console.log(sql0);
       var query0 = db.query(sql0, function(err, result0) {
        //console.log(result0);
          
          var user_id = result0[0].user_id +1;
          //console.log(user_id);
          var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`email`, `password`, `gender`, `user_id`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + email + "','" + pass + "', '"+gender+"','"+user_id+"')";
          //console.log(sql);
          var query = db.query(sql, function(err, result) {
            //console.log(err);
      var message = "Succesfully! Your account has been created.";     
        return res.render('add_friend.ejs', { errormsg: errors ,message:message});
       });
         
       });
       console.log('OK');

   }
              
    }
    return res.render('add_friend.ejs', { errormsg: errors ,message:message});
 };


 // exports.signup = function(req, res){
 //  var message = '';
 //  var mess='';
 //    if(req.method == "POST"){

 //      var post  = req.body;
 //      var email= post.email;
 //      var pass= post.password;
 //      var fname= post.first_name;
 //      var lname= post.last_name;
 //      var mob= post.mob_no;
 //      var gender= post.gender;
 //      var mkdirp = require('mkdirp');
      
 //      req.check('first_name', 'First Name is required').notEmpty();
 //      req.check('last_name', 'Last Name is required').notEmpty();
 //      req.check('password', 'Password is required').notEmpty();
 //      req.check('email', 'Email is required').notEmpty();
 //     // req.checkBody('mob', 'Not valid mobile number').isInt();
 //      req.checkBody('email', 'Email does not appear to be valid').isEmail();
 //      req.check('gender', 'Gender is required').notEmpty();
      
 //      var errors = req.validationErrors();
 //      if (errors) {
 //         console.log("jhjjj");  
 //          return res.render('signup.ejs', { mess: errors ,message:message});
 //      }
 //      else{
 //      mkdirp('public/images/'+fname);
 //      var sql = "INSERT INTO `users` (`first_name`,`last_name`,`mob_no`,`email`, `password`, `gender`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + email + "','" + pass + "', '"+gender+"')";
 //      var query = db.query(sql, function(err, result) {
 //      message = "Registered Sucessfully";
 //        return res.render('signup.ejs',{message:message,mess:mess});
 //      });
 //    }
 //    }
 //    else {
      
 //      return res.render('signup.ejs',{message:message,mess:mess});
 //    }
 // };

exports.editfriend = function(req, res){
    message = '';
    if(req.method == "POST"){
       var post  = req.body;
       var email= post.email;
       var pass= post.password;
       var fname= post.first_name;
       var lname= post.last_name;
       var mob= post.mob_no;
       var gender= post.gender;
       
       var sql0 = "SELECT max(user_id) as user_id FROM users";
            //console.log(sql0);
       var query0 = db.query(sql0, function(err, result0) {
        //console.log(result0);
          
          var user_id = result0[0].user_id +1;
          //console.log(user_id);
          var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`email`, `password`, `gender`, `user_id`) VALUES ('" + fname + "','" + lname + "','" + mob + "','" + email + "','" + pass + "', '"+gender+"','"+user_id+"')";
          //console.log(sql);
          var query = db.query(sql, function(err, result) {
  
          message = "Succesfully! Your account has been created.";
          res.render('add_friend.ejs',{message: message});
       });
         
       }); 
    }
     res.render('add_friend.ejs',{message: message});
 };