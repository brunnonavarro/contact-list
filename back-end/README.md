# Back-end

There's only one route and 5 methods to call:

route: "/contacts"

Get all:
GET http://localhost:3000/contacts/

Post:
POST http://localhost:3000/contacts/

expected json:
{
	"name":"Jhon",
	"lastName": "Wick",
	"phone": "123456789",
	"phone2": "0123456789"
}


Put:
GET http://localhost:3000/contacts/{id}

Get one:
GET http://localhost:3000/contacts/{id}

Delete:
DELETE http://localhost:3000/contacts/{id}



Feel free to comment if you see something wrong :D
