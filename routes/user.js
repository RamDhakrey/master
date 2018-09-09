
var fs = require('fs');
exports.login = function(req, res){
    var message = '';
    var sess = req.session; 
  
    if(req.method == "POST"){
       var post  = req.body;
       var email= post.email;
       var pass= post.password;
      
       var sql="SELECT id,user_id, first_name, last_name, email, gender FROM `users` WHERE `email`='"+email+"' and password = '"+pass+"'";                           
       db.query(sql, function(err, results){   
        //console.log(results[0].id);   
          if(results.length){
            req.session.userId = results[0].user_id;
            req.session.user = results[0];
            //console.log(results.id);
            res.redirect('/home/dashboard');
          }
          else{
             message = 'Wrong Credentials.';
             res.render('index.ejs',{message: message});
          }
                  
       });
    } else {
       res.render('index.ejs',{message: message});
    }         
 };

 exports.signup = function(req, res){
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
          res.render('signup.ejs',{message: message});
       });
         
       });

       
  
    } else {
       res.render('signup');
    }
 };
 exports.upload_image = function(req, res){
    message = '';

    if(req.method == "POST"){
        var post = req.body;
        var user =  req.session.user,
        userId = req.session.userId,
        first_name = user.first_name;
        var image_field = post.image_field;
        if(userId == null){
        res.redirect("/home/login");
        return;
        }
        var file = req.files.image_uploaded;
        console.log(file);
        if(!file)
        return res.status(400).send('No files were uploaded.');
        var image_name = file.name;
        if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
            
            var dir = 'public/images/'+userId+first_name;
            var dir_temp = '/'+userId+first_name;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            
            file.mv(dir+'/'+image_name, function(err){
            if(err){
              return res.status(500).send(err);
            }
              var sql0="SELECT * FROM `profile` WHERE `user_id`='"+userId+"'";
              db.query(sql0, function(err, result){
              if(result==''){

                if(image_field == 'cover-img'){
                  var sql = "INSERT INTO `profile`(`user_id`, `cover_image`, `upload_image`,`current_cover`) VALUES ('" + userId + "','"+dir_temp+'/'+ image_name + "','"+dir_temp+'/'+ image_name + "','"+dir_temp+'/'+ image_name + "')";
                }else if(image_field == 'profile-img'){
                  var sql = "INSERT INTO `profile`(`user_id`, `profile_image`, `upload_image`,`current_profile`) VALUES ('" + userId + "','"+dir_temp+'/'+ image_name + "','"+dir_temp+'/'+ image_name + "','"+dir_temp+'/'+ image_name + "')";
                }else{
                  var sql = "INSERT INTO `profile`(`user_id`, `upload_image`) VALUES ('" + userId + "','"+dir_temp+'/'+ image_name + "')";
                }
                
                var query = db.query(sql, function(err, result) {
                   message = "Succesfully! Your image uploaded.";
                res.redirect("/home/dashboard");
                });
              }else{
                var upload_image = result[0].upload_image;
                    upload_image = upload_image+','+dir_temp+'/'+image_name;
                var profile_image = result[0].upload_image;
                    profile_image = profile_image+','+dir_temp+'/'+profile_image;
                var cover_image = result[0].cover_image;
                    cover_image = cover_image+','+dir_temp+'/'+image_name;

                if(image_field == 'cover-img'){
                  var sql = "UPDATE `profile` SET `cover_image` = '"+cover_image+"', `upload_image`='"+upload_image+"',`current_cover`= '"+dir_temp+'/'+image_name+"' WHERE `user_id` = '"+userId+"'";
                }else if(image_field == 'profile-img'){
                  var sql = "UPDATE `profile` SET `profile_image` = '"+profile_image+"', `upload_image`='"+upload_image+"',`current_profile`= '"+dir_temp+'/'+image_name+"' WHERE `user_id` = '"+userId+"'";
                }else{
                  var sql = "UPDATE `profile` SET `upload_image`='"+upload_image+"' WHERE `user_id` = '"+userId+"'";
                }    
                
                var query = db.query(sql, function(err, result) {
                res.redirect("/home/dashboard");
                 });
              }

              }); 
              
                
          });
        }else{
          res.redirect("/home/dashboard");
        }
       
    } else {
       res.redirect("/home/dashboard");
    }
 };
 exports.dashboard = function(req, res, next){
 
    var user =  req.session.user,
    userId = req.session.userId;
   // var first_name = user.first_name;
   // console.log(user);
    
    if(userId == null){
    res.redirect("/home/login");
    return;
    }
    
    var sql="SELECT * FROM `profile` WHERE `user_id`='"+userId+"'";
       db.query(sql, function(err, results){
      
       //console.log(results);
       if(results==''){
        var current_profile = 'blank';
        var current_cover = 'blank';
      }else{
        var current_profile = results[0].current_profile;
        var current_cover = results[0].current_cover;
      }
      // req.flash('signupMessage', 'Welcome'+first_name+' '+user.last_name);
       
       res.render('profile.ejs', {user:user,current_profile:current_profile,current_cover:current_cover});   
      
    }); 
   };

   exports.logout = function(req, res, next){
    
    req.session.destroy(function(err) {
        // cannot access session here
     });
    //var user =  req.session.user,
    //userId = req.session.userId;
    //console.log('fffff');
    res.redirect("/home/login");
    
   };

   /****swati*****/

    exports.friendlist = function(req, res, next){
 
    var user       =  req.session.user,
        userId     = req.session.userId;
         // var first_name = user.first_name;
   // console.log(user);
    if(userId == null){
    res.redirect("/home/login");
    return;
    }
    var message = '';

    var sql="SELECT * FROM `users`";
       db.query(sql, function(err, results){
      
       
       //var datafr = JSON.stringify(results);
       //console.log(results);
       
       
       res.render('friends.ejs', {data:results , message:message});   
      
    }); 
       //res.render('friends.ejs');   
      
   };