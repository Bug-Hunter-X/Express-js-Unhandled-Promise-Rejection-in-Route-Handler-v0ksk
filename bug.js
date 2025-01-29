const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch user data ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});

//Problem: The above code is vulnerable to a common error where if the database operation fails, it might throw an error without being handled.

// Example of an unhandled error:
//  if (error) {
//  console.error(error); // Logs the error, but doesn't send a response to the client
//  }

//Uncommon Bug:  An uncommon error might occur if the database operation returns a promise that rejects but the error is not properly handled.  Express may not automatically convert the rejected promise to an appropriate HTTP error response.