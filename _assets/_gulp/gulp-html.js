var gulp            = require('gulp');
var ejs             = require("gulp-ejs");
var util            = require('gulp-util');
var notify          = require("gulp-notify");


function buildTemplates(project, browserSync){
	var splitInfo = project.split('_');
    
    // var name = splitInfo[0].split("/")[2];
    console.log(project);
    // var size = splitInfo[2].split("-")[0].split("x")
    
    
    
    // var width = size[0];
    // var height = size[1];
    // var obj = {width:width, height:height};

    return gulp.src("./dev/"+project+"/index.ejs")

        .pipe(ejs({}).on('error', util.log))        
        .on('error', notify.onError({message:"<%= error.message %>", wait: false}))               
        .pipe(gulp.dest(function(file){
            return file.base;
        }))
        .pipe(browserSync.stream());
}


module.exports = buildTemplates;