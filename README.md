# keycloak-auth

> All data, passwords, and keys are for testing purposes only and will not be used in production. I am leaving them here for your convenience in starting up.
## Local Development

1. `npm install` to install all the required packages
2. `npm run docker-compose` to setup docker containers for keycloak with mysql as DB
   > `/realm` folder contains imported realms, clients, and users, so you don't need to worry about them due to the `volumes:./realm:/opt/keycloak/data/import` in `docker-compose.yml`
3. `npm run start` to start the server.
4. Visit `http://localhost:3000/swagger`

## To add your own users into keycloak DB you can visit `http://localhost:8080`
### Existing users:

| email                  | password             | name           |
|:-----------------------|:---------------------|:---------------|
| mauk.lekph@gmail.com   | mauk.lekph@gmail.com | Andrey Morozov |
| a5.morozov@outlook.com | foobaz               | Foo Baz        |
