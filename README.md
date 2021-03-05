# Issue Tracker
is what the title says, an issue tracker. A Full stack application using Node, Express, Mongoose, and React


## Getting Started
Clone the project and move to the folder
```
git clone https://github.com/minnecoder/issue-tracker2.git
cd issue-tracker2
```
Install all of the dependencies
`npm install`

Inside of the `config` folder add the file `config.env`
Enter all of the information below into `config.env`

```
NODE_ENV= [development or production]
MONGO_URI=[MongoDB connection string]
JWT_SECRET=[string of text]
```
`NODE_ENV` should be set to `development` during development and `production` when ready to deploy the app

## Running the app
While doing development run the command `npm run dev` to start the front and back end of the application

