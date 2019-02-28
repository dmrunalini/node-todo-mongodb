const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('./../server/models/user');

var id  = '6c74633c7061ab0aa4362ca0';
if(!ObjectID.isValid(id)) {
  console.log('Id is not valid')
}


User.findById(id).then((user)=>{
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User is ',user);
}).catch((e)=>{
  console.log(e);
})
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   if(!todos) {
//     return console.log('Id not found');
//   }
//   console.log('Todos ',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo ',todo);
// });

// Todo.findOne(id).then((todo)=>{
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo ',todo);
// }).catch((e)=>console.log(e));
