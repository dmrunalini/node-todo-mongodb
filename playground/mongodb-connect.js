//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
  const db = client.db('TodoApp')
  db.collection('Todos').insertOne({
    text:'Something to do sreerama',
    completed:false
  },(err,result)=>{
    if(err) {
      return console.log('Unable to insert todo ',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });

  db.collection('Users').insertOne({name:'Divya',
age: 31,location:'Toronto'},(err,results)=>{
    if(err) {
      return console.log('Unable to insert to Users ',err);
    }
    //console.log(JSON.stringify(results.ops,undefined,2));
    //console.log(results.ops[0]._id.getTimestamp());
  })
  client.close();
});
