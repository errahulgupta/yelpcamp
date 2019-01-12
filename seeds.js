var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data =[
    {
        name : "desert safari",
        image :"https://picsum.photos/200/300",
        description : "it is very hot"
    },
    {
        name : "cold mesa",
        image :"https://picsum.photos/300/300",
        description : "it is very cold"
    },
    {
        name : "wildlife ",
        image :"https://picsum.photos/200/200",
        description : "it is very scary"
    }
]

function seedDB(){
    //remove all data
   /* Campground.remove({},function(err){
        if(err){
            console.log("error");
        }
        //add data
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
            if(err){
                console.log("error");
            }else{
                console.log("added data");
                //add comment
                Comment.create(
                    {
                        text : "this is bad place",
                        author : "rahul"
                        },function(err,comment){
                               if(err){
                                   console.log("error");
                               }else{
                                   campground.comments.push(comment);
                                   campground.save();
                                   console.log("created new comment");
                               }
                               
                            });
                    }
                }) ;
            });
    });*/
    
    
}
 module.exports = seedDB;