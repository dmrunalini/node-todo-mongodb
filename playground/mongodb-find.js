//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err) {
    return console.log('Unable to connect to mongo db server');
  }
  console.log('Connected to mongo db server');
  const db=client.db('TodoApp');
  db.collection('Todos').find({_id:new ObjectID('5c742d83b376ed02a10e6808')}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to fetch tools ',err)
  });
  db.collection('Todos').find({completed:false}).count().then((count)=>{
    console.log(`Todos count :${count}`)
  });
  db.collection('Users').find({name:'Divya'}).count().then((c)=>{
    console.log(`Number of users  with name Divya ${c}`);
  });
  db.collection('Users').find({name:'Divya'}).toArray().then((a)=>{
    console.log(JSON.stringify(a,undefined,2));
  });
  //client.close();
});
