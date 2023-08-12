# My Orchidea
All about orchids app made for educational purpose, created with Angular as Front-End.
# Functionalities
```
Guest:
-view All Orchids
-Login
-Register
```

```
User:
-Add Orchids
-Add Orchid to Favourite
-Remove Orchid from Favourite
-View Profile Info
-View own collection "My Orchids"
-View own collection "My Favourite Orchids"
-Edit and Delete Orchid
```

# Setup
To run this project, in the project directory, you should run:

```
$ cd ./orchid-store
$ npm install
$ ng serve
```

Which opens the app at http://localhost:4200 in your browser. However it will not work until you don't start the RESTful API server. To start the server you have to be in the project directory and do the following steps:

```
$ cd ./server
$ npm install
$ npm run dev
```

And the server will start listening on port 3030.

# Server used: Softuni Practice Server

As seen in https://github.com/softuni-practice-server/softuni-practice-server
