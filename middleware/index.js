//all the middleware goes here
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareobj = {};

middlewareobj.checkcampgroundOwnership = function(req,res,next){
    if(req.isAuthenticated()){
        
        Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            res.redirect("back");
        }else{
            //does the user own the campground
            if(foundCampground.author.id.equals(req.user._id)){
                next();
            }else{
                req.flash("error","you don't have permission to do that!");
                res.redirect("back");
            }
        }
      });
    }else{
        res.redirect("back");
    }
}

middlewareobj.checkCommentOwnership = function(req,res,next){
    if(req.isAuthenticated()){
        
        Comment.findById(req.params.comment_id,function(err,foundcomment){
        if(err){
            res.redirect("back");
        }else{
            //does the user own the campground
            if(foundcomment.author.id.equals(req.user._id)){
                next();
            }else{
                req.flash("error","you don't have the permisssion ");
                res.redirect("back");
            }
        }
      });
    }else{
        req.flash("error","you need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareobj.isLoggedIn = function(req,res,next){
     if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","you need to be logged in to do that!");
    res.redirect("/login");
}

module.exports = middlewareobj;