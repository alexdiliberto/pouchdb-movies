const PouchDB = require('pouchdb');

// Create DB
let movies = new PouchDB('Movies');

// Get movie info
let getInfo = () => {
  movies
    .info()
    .then((info) => {
      console.log(info);
    });
}

// Create a new document
let addMovie = () => {
  movies
    .put({
      _id: 'tdkr',
      title: 'The Dark Knight Rises',
      director: 'Christopher Nolan'
    })
    .then((response) => {
      console.log("Success: ", response);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

// Read a document
let getMovie = () => {
  movies
    .get('tdkr')
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Update a document
let updateMovie = () => {
  movies
    .get('tdkr')
    .then((doc) => {
      doc.year = "2012";      // new field
      // NOTE: When updating a document, you must provide a _rev field.
      console.log(doc._rev);  // doc has a '_rev' field
      return movies.put(doc); // put updated doc, will create new revision
    })
    .then((res) => {
      console.log(res);
    });
}

// Delete a document
let deleteMovie = () => {
  movies
    .get('tdkr')
    .then((doc) => {
      return movies.remove(doc); // returns the promise
    })
    .then((res) => {
      console.log("Remove operation response: ", res);
    });
}
