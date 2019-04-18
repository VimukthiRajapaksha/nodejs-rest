var mongoose = require('mongoose');

module.exports = function(app) {

var postSchema = new mongoose.Schema({
   id : String, 
   author : String, 
   post : String,  
   comments : []  
}); 

var Post = mongoose.model('post', postSchema);

	app.get('/api/posts/:id', function(req, res) {
     Post.find({id : req.params.id}, (err, data) => {
         try{
             res.status(200).send(data);
         }
         catch (err) {
             console.log(err);
         }
     });
 });

	app.get('/api/posts', function(req, res) {
     Post.find({}, (err, data) => {
         try{
             res.status(200).send(data);
         }
         catch (err) {
             console.log(err);
         }
     });
 });

	app.post('/api/posts', function(req, res) {
     const newPost = new Post(req.body);
     console.log("here:::" + {...req.body});
     newPost.save().then(data => {
        res.json(data);
     }).catch(err => {
        console.error(err);
        res.sendStatus(500);
     });
 });

	app.put('/api/posts', function(req, res) {
     const post = new Post(req.body);
     post.update().then(data => {
         res.status(200).send(data);
     }).catch(err =>{
         console.log(err);
     });
 });

	app.delete('/api/posts/:id', function(req, res) {
     Post.remove(req.params.id).then(() => {
         res.status(200).send('removed');
     }).catch((err) => {
         console.log(err);
     });
 });
};




