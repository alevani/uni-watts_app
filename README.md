# uni-watts_app
WATTS social investment platform

## TODO
Create license
```
npx license mit > LICENSE
```

# RUN ME
## Prerequisites
<p>NodeJS</p>
<p>Node Packet Manager (NPM)</p>
<p>docker and docker-compose</p>

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
### Fire up the database
```
docker-compose up -d
```
> TODO: fill seed.js to prepopulate the database.