var express = require("express");
var router = express.Router();
const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "ali",
    password: "JxSLRkdutW",
    database: "watch"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!");
  });
router.get("/",function(req,res,next){
    res.send("API is working properly");
});
router.get("/brands",function(req,res,next){
    // res.send("API is working properly");
    

    con.query("select * from Brands",(err,rows) => {
    // res.writeHead(200,{'Content-Type': 'text/html'});
    // var data = fs.readFileSync('./index.html');
    res.send(rows);
    // res.end();
    // console.log(rows);

        
    });
});
router.get("/ViewWatch",function(req,res){
  console.log(req.query.gender);
  let result = "select Items.id,Items.name,ItemImages.name as image from Items join ItemImages on ItemImages.item_id = Items.id where (";
  if(req.query.gender.includes(',')){
    let gender = req.query.gender.split(',');
    for(let i = 0;i < gender.length;i++){
      result = result + "Items.gender = "+gender[i];
      if(gender.length-1 == i){
        result = result +") and ItemImages.name is not null group by id";
      }
      else{
        result = result + " || ";
      }
    }
  }
  else{
    result = result + "Items.gender = "+req.query.gender+") and ItemImages.name is not null group by id";
  }
  console.log(result);
  // result = result+"Items.gender =0 || Items.gender = 0)";
  // select Items.id,Items.name,ItemImages.name as image from Items join ItemImages on ItemImages.item_id = Items.id where (Items.gender =0 || Items.gender = 0) group by id;
  // console.log("api")
  con.query(result,(err,rows) => {
    res.send(rows);
  });
  // res.send("Api is working");
})
router.get("listWatches",function(req,res,next){
  con.query("select * from Items",(err,rows) => {
    res.send(rows);
  })
})


module.exports = router;