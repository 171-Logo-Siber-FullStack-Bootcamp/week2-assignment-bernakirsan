const express = require("express"); // import express


// import controllers

const postsController = require("./src/controllers/posts");
const usersController = require("./src/controllers/users");
const todosController = require("./src/controllers/todos");
const albumsController = require("./src/controllers/albums");

const app = express(); 

app.get("/posts",(req,res) => {  // getting all posts
    var posts = postsController.getAllPosts(); 
    res.send(posts);
});

app.get("/posts/:postId", (req,res) => { // get params post
    var post = postsController.getPostById(req.params.postId);
    res.send(post);
});

app.get("/users", (req,res) => {
    var users = usersController.getAllUsers();
    res.send(users);
});

app.get("/users/:userId", (req,res) => {
    var user = usersController.getUserById(req.params.userId);
    res.send(user);
});

app.get("/todos", (req,res) => { 

    var todos;
    if(req.query.userId){
        todos = todosController.getTodosByUserId(req.query.userId);
    } 
    else {
        todos = todosController.getAllTodos();
    }

    res.send(todos);
});

app.get("/albums", (req,res) => {
    var albums = albumsController.getAllAlbums();
    res.send(albums);
});

app.get("/albums/:albumId", (req,res) => {
    var album = albumsController.getAlbumById(req.params.albumId);
    res.send(album);
})


const PORT = 5500; // Define Port Number
app.listen(PORT); // Listening Server


