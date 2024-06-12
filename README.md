# URL Shortener Service

## Description

A URL shortening service built with Node.js and Express, using in-memory storage.

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed (version 16 or later recommended).
- A terminal or command prompt.

## Installation and Running the Service

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Hassiad/url-shortener-service.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd url-shortener
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Start the Server**

   ```bash
   npm start
   ```

   This will start the server on port 3000 by default.

## Access the Endpoints

- **POST /api/encode**: Encodes a long URL to a shortened URL.
- **POST /api/decode**: Decodes a shortened URL to its original long URL.
- **GET** **/api/statistic/**: Returns statistics for the given short URL path.

## Using the API

### Encode a URL

**Request:**

```json
POST /api/encode
{
  "longUrl": "https://indicina.co"
}
```

**Response:**

```json
{
  "status": "success",
  "shortUrl": "http://short.est/GeAi9K"
}
```

### Decode a URL

**Request:**

```json
POST /api/decode
{
  "shortUrl": "http://short.est/GeAi9K"
}
```

**Response:**

```json
{
  "status": "success",
  "longUrl": "https://indicina.co"
}
```

### Get URL Statistics

**Request:**

```json
GET / api / statistic / GeAi9K
```

**Response:**

```json
{
  "status": "success",
  "data": {
    "createdAt": "2023-06-06T12:00:00Z",
    "hitCount": 5
  }
}
```

## Running Tests

1. **Ensure the Test File Exists**

   - Make sure your `url.test.js` file is located in the `tests` directory.

2. **Run the Tests**

   ```bash
   npm test
   ```

## Project Structure

```
url-shortener/
├── controllers/
│   ├── urlController.js
├── models/
│   ├── urlStorage.js
├── public/
├── routes/
│   ├── urlRoutes.js
├── utils/
│   ├── appError.js
│   ├── catchAsync.js
│   ├── errorHandler.js
│   ├── utilsFunction.js
├── views/
├── app.js
├── server.js
├── tests/
│   ├── url.test.js
├── README.md
├── .eslintrc.json
├── .prettierrc
├── package.json
├── package-lock.json
└── urlShortener-postman-collection.json
```

## Postman Collection

You can access the Postman collection for this API [here](https://documenter.getpostman.com/view/7496363/2sA3XPC31S).
