const posts = require("../data/posts.json"); // import posts


getAllPosts = () => { // return all posts
    return posts;
}

getPostById=(postId) => { // filters
    return posts.filter(x=>x.id == postId);
}

module.exports = { // export function
    getAllPosts, 
    getPostById
};

