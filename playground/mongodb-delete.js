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
// db.collection('Todos').deleteOne({text:'Walk the dog'}).then((result)=>{
//   console.log(result);
// })
// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// })
// db.collection('Users').deleteMany({name:'Divya'}).then((result)=>{
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({_id:123}).then((result)=>{
  console.log(result);
});

  //client.close();
});
