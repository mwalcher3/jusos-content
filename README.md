# Strapi App as Jusos Heidelberg backend

This is a simple test run of the backend component for a possible new Jusos Heidelberg website. 
## Overview

The Strapi app serves as headless content management system. It is deployed and run in production mode on Uberspace at
https://content.jusoshd.uber.space

The content is stored in a PostgresQL database also hosted by Uberspace
(ask @mwalcher3 for credentials)

The content structure (content types, fields, etc.) is coded in the app. It can only be altered with the app running locally in development mode by a user with super admin privileges.

**Note:** The PostgresQL database used on Uberspace is also mounted in local development mode.  Credentials are stored in `/config/database.js` but subject to change without notice by Heroku. Contact @mwalcher3 if you notice this might have happened.
## Installation

To run the app locally, make sure git and Node.js (including npm and yarn) are installed, and you have access to gitHub. Then clone the repo as usual with
```
git clone https://github.com/mwalcher3/jusos-content.git
```
and resolve dependencies with ```yarn install``` 

To start the App in development mode:
```yarn run dev```
To build the App in production mode:
```yarn run build```
To start the finished app:
```yarn run start```

## Contribute

Commit all changes to the branch `main` via:
```
git commit -am "commit message"
git push origin 
```


