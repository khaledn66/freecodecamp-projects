# Resource Monitor

A simple real-time system resource monitor built with **Node.js**, **Express/HTTP**, and **WebSocket**.

The application displays current system memory usage and CPU load average in the browser. Data is sent from the server to the client every second using a WebSocket connection.

## Features

* Real-time system monitoring
* Memory usage information:

  * Free memory
  * Total memory
  * Memory usage percentage
* CPU load average:

  * 1 minute
  * 5 minutes
  * 15 minutes
* WebSocket connection for real-time updates
* Automatic cleanup of the update interval when the client disconnects
* Simple HTML interface

## Technologies

* Node.js
* HTTP module
* File System (`fs`) module
* Operating System (`os`) module
* WebSocket (`ws`)
* JavaScript
* HTML

## How It Works

When a client opens the application, the browser establishes a WebSocket connection with the server.

Once the connection is established, the server starts an interval that runs every second:

```js
const interval = setInterval(() => {
  socket.send(JSON.stringify(getMetrics()));
}, 1000);
```

The `getMetrics()` function collects information about the system using Node.js's built-in `os` module.

The server converts the JavaScript object to a JSON string using `JSON.stringify()` before sending it through the WebSocket.

When the client disconnects, the interval is cleared:

```js
socket.on("close", () => {
  clearInterval(interval);
  console.log("Client disconnected");
});
```

This prevents the server from continuing to execute the interval after the client has disconnected.

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
node server.js
```

The application will be available at:

```text
http://localhost:3000
```

Open the URL in a browser to view the Resource Monitor.

## Project Structure

```text
.
├── public/
│   └── index.html
├── server.js
├── package.json
└── README.md
```

## Example

The dashboard displays information similar to:

```text
Memory Usage

85.4%

571 MB free / 3917 MB total

Load Average

0.52  1 min
0.43  5 min
0.33  15 min
```

The values are updated automatically every second.

## License

This project was created for learning and practicing Node.js and WebSocket concepts.
