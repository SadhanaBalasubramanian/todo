# todo
This application is used for Todo task Management
The Tech stack used
Front End - ReactJS [ react-admin , rs-data-simple-rest , material-ui ]
Backend - NodeJS [json-server , concurrently ]
Data Storage - Json-Server [ db.json file]

**For create a package.json file**

    npm init

**Install JSON Server**

    npm install -g json-server
    
**react-admin**

A frontend Framework for building data-driven applications running in the browser on top of REST/GraphQL APIs, using ES6, React and Material Design.
  
**Install react-admin**

    npx i react-admin 
        
**ra-data-simple-rest**

    Simple REST Data Provider for react-admin, the frontend framework for building admin applications on top of REST/GraphQL services.  
    
**Install ra-data-simple-rest**

    npx i ra-data-simple-rest
  
**Material-UI**

    Material-UI is a set of React components that implement Google's Material Design specification.    
        
**Install ra-data-simple-rest**

    npx i  @material-ui/core
    
**Concurrently**

    Run multiple commands concurrently. Like npm run watch-js & npm run watch-less
    
**Install concurrently**
    
    npm install concurrently
    
in package.json - need to add the following inside script for coc

 "scripts": {
    "server": "json-server --watch db.json --port 5000 --middlewares ./range.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client \"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

Add the proxy attribute in client - package.json file

  "proxy": "http://localhost:5000"
  
