const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'5c7832027728b502b74faee8'}).then((todo)=>{
  console.log(todo);
});

//Todo.findByIdAndRemove
