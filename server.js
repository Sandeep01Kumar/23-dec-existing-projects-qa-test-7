/**
 * @file Minimal HTTP server implementation
 * @description Creates a basic HTTP server using Node.js built-in http module.
 *              Responds with "Hello, World!" to all incoming HTTP requests regardless
 *              of method or path. This server handles ALL HTTP methods (GET, POST, PUT,
 *              DELETE, etc.) identically and returns the same response for ALL URL paths.
 * @author hxu
 * @license MIT
 * @module server
 * @requires http
 * @see https://nodejs.org/api/http.html
 * @example
 * // Start the server
 * node server.js
 * // Server running at http://127.0.0.1:3000/
 */

// Import the built-in Node.js HTTP module for creating web servers
// Uses CommonJS module system (require) for module loading
const http = require('http');

/**
 * @constant {string} hostname
 * @description The IP address or hostname the server binds to.
 *              Using '127.0.0.1' (localhost) restricts access to the local machine only.
 *              Change to '0.0.0.0' to accept connections from all network interfaces.
 * @default '127.0.0.1'
 */
const hostname = '127.0.0.1';

/**
 * @constant {number} port
 * @description The TCP port number the server listens on.
 *              Port 3000 is commonly used for Node.js development servers.
 *              Ports below 1024 require elevated privileges on Unix systems.
 * @default 3000
 */
const port = 3000;

/**
 * @function createServer
 * @description Creates an HTTP server instance with a request handler callback.
 *              The callback is invoked for every incoming HTTP request.
 *              This server responds identically to all requests - any HTTP method
 *              and any URL path will receive the same "Hello, World!" response.
 *
 * @callback RequestHandler
 * @param {http.IncomingMessage} req - The incoming request object containing:
 *        - req.method: HTTP method (GET, POST, PUT, DELETE, etc.)
 *        - req.url: Requested URL path
 *        - req.headers: Request headers object
 * @param {http.ServerResponse} res - The server response object with methods:
 *        - res.statusCode: Sets HTTP status code
 *        - res.setHeader(): Sets response headers
 *        - res.end(): Sends response and closes connection
 * @returns {void}
 */
const server = http.createServer((req, res) => {
  // Set HTTP status code to 200 (OK) - indicates successful request processing
  res.statusCode = 200;
  // Set Content-Type header to 'text/plain' for plain text response body
  res.setHeader('Content-Type', 'text/plain');
  // Send "Hello, World!" response body and close the client connection
  // The complete request-response lifecycle ends here
  res.end('Hello, World!\n');
});

// Start the HTTP server: bind to the specified port and hostname, then execute callback
server.listen(port, hostname, () => {
  // Log the server URL to console when server successfully starts listening
  console.log(`Server running at http://${hostname}:${port}/`);
});
