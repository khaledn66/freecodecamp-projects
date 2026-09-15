# Camper Bot Personal Profile

A simple personal profile web app built with **Node.js** and **Express.js**.

## Features

* Homepage with a welcome message
* Hobbies and skills routes
* JSON API with profile information
* Static HTML interface with interactive profile cards

## Technologies

* Node.js
* Express.js
* HTML
* CSS
* JavaScript

## Run the project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The application runs on:

```text
http://localhost:3000
```

## API

Profile data is available at:

```text
GET /api/profile
```

Example response:

```json
{
  "name": "Camper Bot",
  "hobbies": ["cycling", "boating", "guitar"],
  "skills": ["JavaScript", "Node.js", "Express.js"]
}
```

