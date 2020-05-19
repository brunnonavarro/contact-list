# contact-list
This is a project made by me to study the principles of REST + NodeJs + React.

### Front-end
Stack: React + Axios

### Back-end
Stack: NodeJs + Express + Sequelize

### Database
Mysql 5.7.3


### Install options:

#### Database
At back-end/database run:
docker build -t contacts

to run the docker container:
docker run -d -p 3306:3306 contacts

#### Back-end

At /backend run:

docker build -t contacts-backend
docker run -d -p 3000:3000 contacts-backend

note: all migrations will run and create the tables automatically

#### Front-end

At /front-end run:
npm install && npm start





Feel free to comment if you see something wrong :D
