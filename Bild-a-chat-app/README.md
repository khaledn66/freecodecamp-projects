# WebSocket Chat App

A simple real-time chat application built with Node.js, HTTP, and WebSocket.

## Features

* Real-time messaging between connected users
* Username support
* WebSocket communication
* Connection and disconnection notifications
* Messages are broadcast to all connected clients
* Simple browser-based interface

## Technologies

* Node.js
* HTTP
* WebSocket
* `ws` library
* HTML
* CSS
* JavaScript

## How It Works

The application uses a Node.js HTTP server to serve the frontend files:

* `index.html` — the chat interface
* `script.js` — client-side JavaScript

A WebSocket server runs on the same HTTP server.

When a user connects, their username is received from the URL:

```text
ws://localhost:3001/?username=Username
```

When a user sends a message, the server broadcasts it to all connected clients.

When a user disconnects, the server sends a system message:

```text
Username left
```

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
http://localhost:3001
```

Open the application in two browser tabs to test real-time messaging between users.

## Project Structure

```text
.
├── public/
│   ├── index.html
│   └── script.js
├── server.js
├── package.json
└── README.md
```

## WebSocket Message Format

Messages sent from the client use JSON:

```json
{
  "username": "Alice",
  "text": "Hello!"
}
```

The server broadcasts chat messages in the following format:

```json
{
  "type": "chat",
  "username": "Alice",
  "text": "Hello!"
}
```

Disconnection messages use:

```json
{
  "type": "system",
  "text": "Alice left"
}
```

## Port

The server runs on port `3001`.

```js
const PORT = 3001;
```
# WebSocket Chat App

A simple real-time chat application built with Node.js, HTTP, and WebSocket.

## Features

* Real-time messaging between connected users
* Username support
* WebSocket communication
* Connection and disconnection notifications
* Messages are broadcast to all connected clients
* Simple browser-based interface

## Technologies

* Node.js
* HTTP
* WebSocket
* `ws` library
* HTML
* CSS
* JavaScript

## How It Works

The application uses a Node.js HTTP server to serve the frontend files:

* `index.html` — the chat interface
* `script.js` — client-side JavaScript

A WebSocket server runs on the same HTTP server.

When a user connects, their username is received from the URL:

```text
ws://localhost:3001/?username=Username
```

When a user sends a message, the server broadcasts it to all connected clients.

When a user disconnects, the server sends a system message:

```text
Username left
```

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
http://localhost:3001
```

Open the application in two browser tabs to test real-time messaging between users.

## Project Structure

```text
.
├── public/
│   ├── index.html
│   └── script.js
├── server.js
├── package.json
└── README.md
```

## WebSocket Message Format

Messages sent from the client use JSON:

```json
{
  "username": "Alice",
  "text": "Hello!"
}
```

The server broadcasts chat messages in the following format:

```json
{
  "type": "chat",
  "username": "Alice",
  "text": "Hello!"
}
```

Disconnection messages use:

```json
{
  "type": "system",
  "text": "Alice left"
}
```

## Port

The server runs on port `3001`.

```js
const PORT = 3001;
```
