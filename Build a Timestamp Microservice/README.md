# Timestamp Microservice

A simple Node.js and Express API that converts dates into Unix timestamps and UTC strings.

## Features

* Returns the current date and time.
* Converts date strings to Unix timestamps.
* Converts Unix timestamps to UTC dates.
* Returns an error for invalid dates.

## API Examples

```text
/api
/api/December%2025,%202015
/api/1451001600000
/api/hello
```

Invalid dates return:

```json
{
  "error": "Invalid Date"
}
```

## Run

```bash
npm install
npm start
```
