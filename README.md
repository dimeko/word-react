## Wordpress + React

This is a basic template using for creating applications in php webservers with a headless Wordpress CMS and a React webapp.

### Installation
Create the first build of the webapp:
```cd webapp && npm install && npm run build```

Spin up the server, the database and a phpMyAdmin instance:
```docker-compose  up```

<b>NOTE:</b> Do not forget to put the two domains inside your `/etc/hosts` file.