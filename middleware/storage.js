const multer = require("multer")

const path = require("path")

const storage = multer.diskStorage({

    destination : function(request,file,callback){

        callback(null,'./uploads/images');

    },

  filename : function(request,file,callback){

    const newFileName = (+new Date()).toString() + path.extname(file.originalname)

           callback(null,newFileName);
  }


});

const upload = multer({

storage : storage,

})

module.exports = upload;