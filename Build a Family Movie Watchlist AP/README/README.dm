# Family Movie Watchlist API

A simple REST API for managing family movie watchlists with JWT authentication and role-based authorization.

## Tech Stack

* Node.js
* Express.js
* JWT
* Helmet
* JSON file storage

## Run

```bash
npm install
npm start
```

API runs on `http://localhost:3000`.

## Endpoints

* `POST /api/auth/login` — login and receive a JWT token
* `GET /api/watchlist/:userId` — get a user's watchlist
* `POST /api/watchlist/:userId/movies` — add a movie
* `PUT /api/watchlist/:userId/movies/:movieId` — update a movie
* `DELETE /api/watchlist/:userId/movies/:movieId` — delete a movie

All watchlist routes require a Bearer token.

Parents can modify any user's watchlist. Children can only modify their own watchlist.

## Test

```bash
npm test
```
