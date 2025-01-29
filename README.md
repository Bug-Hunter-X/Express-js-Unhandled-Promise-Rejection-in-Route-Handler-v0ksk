# Express.js Unhandled Promise Rejection

This repository demonstrates an uncommon error in Express.js applications: unhandled promise rejections within route handlers.  When database operations (or other asynchronous tasks) fail, the application might not respond appropriately, leading to silent failures.

## Bug
The `bug.js` file contains an Express.js route handler that fetches user data from a database.  If the database operation fails (e.g., due to a network error or database outage), the error isn't explicitly caught, leading to a silent failure.  The application won't send an error response to the client, making debugging difficult.

## Solution
The `bugSolution.js` file demonstrates how to properly handle promise rejections using `try...catch` blocks or `.catch()` methods to provide better error handling and informative responses to the client.