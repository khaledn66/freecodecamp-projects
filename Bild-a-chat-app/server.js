

import http from "http";
import fs from "fs";
import { WebSocketServer } from "ws";

const PORT = 3001;

const files = {
  "/": {
    path: "./public/index.html",
    contentType: "text/html",
  },
  "/index.html": {
    path: "./public/index.html",
    contentType: "text/html",
  },
  "/script.js": {
    path: "./public/script.js",
    contentType: "text/javascript",
  },
};

const server = http.createServer((req, res) => {
  const file = files[req.url];

  if (!file) {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("Not found");
    return;
  }

  fs.readFile(file.path, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Error reading file");
      return;
    }

    res.writeHead(200, {
      "Content-Type": file.contentType,
    });

    res.end(data);
  });
});

const wss = new WebSocketServer({ server });

wss.on("connection", (socket, req) => {
  const username = new URL(
    req.url,
    "http://localhost",
  ).searchParams.get("username");

  console.log("Client connected:", username);

  socket.on("message", (data) => {
    const { username, text } = JSON.parse(data);

    const message = JSON.stringify({
      type: "chat",
      username,
      text,
    });

    wss.clients.forEach((client) => {
      client.send(message);
    });
  });

  socket.on("close", () => {
    const message = JSON.stringify({
      type: "system",
      text: `${username} left`,
    });

    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

