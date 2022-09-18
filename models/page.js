var mongoose = require('mongoose');

//page schema

var PageSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },
    slug: {
        type: String,
      
    },
    sorting: {
        type: Number,
      
    },
});

var Page =module.exports=mongoose.model('Page',PageSchema);