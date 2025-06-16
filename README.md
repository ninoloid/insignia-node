Authentication API Documentation

## Base URL

```bash
http://localhost:3000
```

## 📘 Endpoints

### Register a New User

```
URL: /auth/register
Method: POST
Content-Type: application/json
```

Request Body

```json
{
  "name": "ahmad",
  "email": "muhammadsatriaadiputra@gmail.com",
  "password": "asdasd"
}
```

Success Response
Status Code: `201 CREATED`

```json
{
  "error": false,
  "message": "User registered successfully",
  "data": {
    "id": "684fd4fe9d85b82c99491e11",
    "email": "muhammadsatriaadiputra@gmail.com"
  }
}
```

Error Response
Status Code: `400 BAD REQUEST`

```json
{
  "error": true,
  "message": "Validation error",
  "details": [
    {
      "type": "field",
      "msg": "Password must be at least 6 characters",
      "path": "password",
      "location": "body"
    }
  ]
}
```

---

### Login a User

```
URL: /auth/login
Method: POST
Content-Type: application/json
```

Request Body

```json
{
  "email": "muhammadsatriaadiputra@gmail.com",
  "password": "asdasd"
}
```

Success Response
Status Code: `200 OK`

```json
{
  "error": false,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

Error Response
Status Code: `400 BAD REQUEST`

```json
{
  "error": true,
  "message": "Validation error",
  "details": [
    {
      "type": "field",
      "msg": "Valid email is required",
      "path": "email",
      "location": "body"
    }
  ]
}
```

Status Code: `400 BAD REQUEST`

```json
{
  "email": "muhammadsatriaadiputra5@gmail.com",
  "password": "asdasd"
}
```

---

### Get Users

```
URL: /users
Method: GET
Content-Type: application/json
```

Success Response
Status Code: `200 OK`

```json
{
  "error": false,
  "message": "Sucess",
  "data": [
    {
      "_id": "684ef5ed32300e041c377b91",
      "name": "ahmad",
      "email": "muhammadsatriaadiputra@gmail.com",
      "createdAt": "2025-06-15T16:33:49.365Z",
      "updatedAt": "2025-06-15T16:33:49.365Z",
      "__v": 0
    },
    {
      "_id": "684fd4fe9d85b82c99491e11",
      "name": "ahmad",
      "email": "muhammadsatriaadiputra2@gmail.com",
      "createdAt": "2025-06-16T08:25:34.559Z",
      "updatedAt": "2025-06-16T08:25:34.559Z",
      "__v": 0
    }
  ]
}
```

---

### Get User by ID

```
URL: /users/:id
Method: GET
Content-Type: application/json
```

Request Param

```json
{
  "id": "684ef5ed32300e041c377b91"
}
```

Success Response
Status Code: `200 OK`

```json
{
  "error": false,
  "message": "Sucess",
  "data": {
    "_id": "684ef5ed32300e041c377b91",
    "name": "ahmad",
    "email": "muhammadsatriaadiputra@gmail.com",
    "createdAt": "2025-06-15T16:33:49.365Z",
    "updatedAt": "2025-06-15T16:33:49.365Z",
    "__v": 0
  }
}
```

Error Response
Status Code: `404 NOT FOUND`

```json
{
  "error": true,
  "message": "User not found"
}
```

---

### Put User by ID

```

URL: /users/:id
Method: PUT
Content-Type: application/json

```

Request Param

```json
{
  "id": "684ef5ed32300e041c377b91"
}
```

Request Body

```json
{
  "name": "ahmad test", // optional
  "email": "test@email.com" // optional
}
```

Success Response
Status Code: `200 OK`

```json
{
  "error": false,
  "message": "User updated successfully"
}
```

Error Response
Status Code: `404 NOT FOUND`

```json
{
  "error": true,
  "message": "User not found"
}
```

Status Code: `400 BAD REQUEST`

```json
{
  "error": true,
  "message": "Validation error",
  "details": [
    {
      "type": "alternative_grouped",
      "msg": "Either a valid name or a valid email is required",
      "nestedErrors": [
        [
          {
            "type": "field",
            "msg": "Invalid value",
            "path": "name",
            "location": "body"
          },
          {
            "type": "field",
            "msg": "Invalid value",
            "path": "name",
            "location": "body"
          }
        ],
        [
          {
            "type": "field",
            "msg": "Invalid value",
            "path": "email",
            "location": "body"
          },
          {
            "type": "field",
            "msg": "Invalid value",
            "path": "email",
            "location": "body"
          }
        ]
      ]
    }
  ]
}
```

---

### Delete User by ID

```

URL: /users/:id
Method: DELETE
Content-Type: application/json

```

Request Param

```json
{
  "id": "684ef5ed32300e041c377b91"
}
```

Request Body

```json
{
  "name": "ahmad test", // optional
  "email": "test@email.com" // optional
}
```

Success Response
Status Code: `200 OK`

```json
{
  "error": false,
  "message": "User deleted successfully"
}
```

Error Response
Status Code: `404 NOT FOUND`

```json
{
  "error": true,
  "message": "User not found"
}
```

---

## 📌 Notes

All endpoints require JSON input.

The login response contains a JWT token which should be used for authenticated requests to protected endpoints.

```

```
