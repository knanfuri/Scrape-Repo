var mongoose = require("mongoose");


var News = mongoose.Schema;

var ArticleSchema = new News({
  
  title: {
    type: String,
    required: true
  },
 
  link: {
    type: String,
    required: true
  },

  note: {
    type: News.Types.ObjectId,
    ref: "Note"
  }
});


var Article = mongoose.model("Article", ArticleSchema);


module.exports = Article;