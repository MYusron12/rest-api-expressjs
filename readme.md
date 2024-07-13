# REST API with Express.js

This is a simple REST API built with Express.js. It provides basic CRUD (Create, Read, Update, Delete) operations for managing resources.

## Features

- Create a new resource
- Retrieve a list of resources
- Retrieve a single resource by ID
- Update a resource by ID
- Delete a resource by ID

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MYusron12/rest-api-expressjs.git
```

2. Navigate to the project directory:

```bash
cd rest-api-expressjs
```

3. Install the dependencies:

```bash
npm install
```

### Running the Application

1. Start the server:

```bash
npm start
```

2. The server will be running at `http://localhost:3000`.

## API Endpoints

### Create a New Resource

- **URL:** `/resources`
- **Method:** `POST`
- **Request Body:**

```json
{
  "name": "Resource Name",
  "description": "Resource Description"
}
```

- **Response:**

```json
{
  "id": 1,
  "name": "Resource Name",
  "description": "Resource Description"
}
```

### Retrieve All Resources

- **URL:** `/resources`
- **Method:** `GET`
- **Response:**

```json
[
  {
    "id": 1,
    "name": "Resource Name",
    "description": "Resource Description"
  }
]
```

### Retrieve a Single Resource by ID

- **URL:** `/resources/:id`
- **Method:** `GET`
- **Response:**

```json
{
  "id": 1,
  "name": "Resource Name",
  "description": "Resource Description"
}
```

### Update a Resource by ID

- **URL:** `/resources/:id`
- **Method:** `PUT`
- **Request Body:**

```json
{
  "name": "Updated Resource Name",
  "description": "Updated Resource Description"
}
```

- **Response:**

```json
{
  "id": 1,
  "name": "Updated Resource Name",
  "description": "Updated Resource Description"
}
```

### Delete a Resource by ID

- **URL:** `/resources/:id`
- **Method:** `DELETE`
- **Response:**

```json
{
  "message": "Resource deleted successfully"
}
```

## Built With

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
```