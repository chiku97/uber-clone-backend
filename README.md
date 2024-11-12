Base URL
Assuming you are running the server locally on port 5000, the base URL will be:

bash
Copy code
http://localhost:5000/api
1. Get User Details
Endpoint: /api/users/:id
Method: GET
Description: Retrieve details of a specific user by their id.
Steps in Postman
Set the request method to GET.
Enter the URL as http://localhost:5000/api/users/<USER_ID>.
Replace <USER_ID> with the actual id of the user you want to retrieve.
Click Send.
Expected Response
json
Copy code
{
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "currentLocation": {
        "type": "Point",
        "coordinates": [-73.935242, 40.73061]
    },
    "createdAt": "2024-11-10T12:34:56.789Z",
    "updatedAt": "2024-11-10T12:34:56.789Z",
    "__v": 0
}
2. Update User Location
Endpoint: /api/users/:id/location
Method: PUT
Description: Update the location coordinates of a specific user by id.
Steps in Postman
Set the request method to PUT.
Enter the URL as http://localhost:5000/api/users/<USER_ID>/location.
Go to the Body tab and select raw and JSON.
Enter the JSON body with latitude and longitude as follows:
json
Copy code
{
    "latitude": 40.73061,
    "longitude": -73.935242
}
Click Send.
Expected Response
json
Copy code
{
    "_id": "user_id_here",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "currentLocation": {
        "type": "Point",
        "coordinates": [-73.935242, 40.73061]
    },
    "createdAt": "2024-11-10T12:34:56.789Z",
    "updatedAt": "2024-11-10T13:00:00.000Z",
    "__v": 0
}
3. Get Rider Details
Endpoint: /api/riders/:id
Method: GET
Description: Retrieve details of a specific rider by their id.
Steps in Postman
Set the request method to GET.
Enter the URL as http://localhost:5000/api/riders/<RIDER_ID>.
Replace <RIDER_ID> with the actual id of the rider you want to retrieve.
Click Send.
Expected Response
json
Copy code
{
    "_id": "rider_id_here",
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "currentLocation": {
        "type": "Point",
        "coordinates": [-73.985428, 40.748817]
    },
    "isAvailable": true,
    "createdAt": "2024-11-10T12:34:56.789Z",
    "updatedAt": "2024-11-10T12:34:56.789Z",
    "__v": 0
}
4. Update Rider Location
Endpoint: /api/riders/:id/location
Method: PUT
Description: Update the location coordinates of a specific rider by id.
Steps in Postman
Set the request method to PUT.
Enter the URL as http://localhost:5000/api/riders/<RIDER_ID>/location.
Go to the Body tab and select raw and JSON.
Enter the JSON body with latitude and longitude as follows:
json
Copy code
{
    "latitude": 40.748817,
    "longitude": -73.985428
}
Click Send.
Expected Response
json
Copy code
{
    "_id": "rider_id_here",
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "currentLocation": {
        "type": "Point",
        "coordinates": [-73.985428, 40.748817]
    },
    "isAvailable": true,
    "createdAt": "2024-11-10T12:34:56.789Z",
    "updatedAt": "2024-11-10T13:00:00.000Z",
    "__v": 0
}
Summary of Endpoints
Endpoint	Method	Description
/api/users/:id	GET	Retrieve details of a user
/api/users/:id/location	PUT	Update location of a user
/api/riders/:id	GET	Retrieve details of a rider
/api/riders/:id/location	PUT	Update location of a rider
