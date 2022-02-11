const albums = require("../data/albums.json"); // import album

getAllAlbums = () => {  // return all albums
    return albums;  
}

getAlbumsById = (albumId) => {  // filters
    return users.filter(x => x.id == albumId);
}

module.exports = {  // export function
    getAllAlbums,
    getAlbumById
};


