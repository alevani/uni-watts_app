# uni-watts_app
WATTS social investment platform. This repository is meant to contain a very simple NodeJS backend implementation for an app mockup.

## TODO
- Create license
```
npx license mit > LICENSE
```
- fill seed.js to prepopulate the database.

# RUN ME
## Prerequisites
- <p>NodeJS</p>
- <p>Node Packet Manager (NPM)</p>
- <p>docker and docker-compose</p>

### 1. Clone the repository 
```
git clone git@github.com:alevani/uni-watts_app.git
```
### 2. Install the node moduels
```
npm install
```
### 3. Create your dotven file
```
touch .env
DB_HOST=host_to_database
DB_USER=username
DB_PASS=password
DB_NAME=database_name
```
### 4. Fire up the database
```
cd ./mongo/
docker-compose up -d
```