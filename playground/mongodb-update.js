//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
const db = client.db();
db.collection('Todos').findOneAndUpdate({text:'Walk the dog'},{$set:{completed:true}},{returnOriginal:false})
.then((result)=>{
  console.log(result);
})
db.collection('Users').findOneAndUpdate({_id:new ObjectID('5c742bcccecfd20359db74e2')},{$set:{name:'SreeDivya Mrunalini'},
                                                            $inc:{age:1}},{returnOriginal:false})
.then((result)=>{
  console.log(result);
});
// db.collection('Users').findOneAndUpdate({location:'Toronto'},{$inc:{age:3,age:31}},{returnOriginal:false})
// .then((result)=>{
//   console.log(result);
// })
  //client.close();
});
