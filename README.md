## Wordpress + React

This is a basic template using for creating applications in php webservers with a headless Wordpress CMS and a React webapp.

### Installation
Create the first build of the webapp:
```cd webapp && npm install && npm run build:dev```

Spin up the server, the database and a phpMyAdmin instance:
```docker-compose  up```

<b>NOTE:</b> Do not forget to put the two domains inside your `/etc/hosts` file.

### About wordpress API configuration
Wordpress is not configured by default to work as a headless CMS and utilize only its API.
Preparing the API:

1. Go to Settings > Permalinks and at `Custom structure` add `/%postname%/` to the field
2. Add the plugins:</br>
   1. `Custom Post Type UI`: it's for adding additional models like the default `Posts`. e.g. `Projects`
   2. `Advanced Custom Fields`: it's for adding custom field to models under property `acf`
   3. `ACF to REST API`: it's basically for enabling the two above plugins
3. Access the API on path: `/index.php/wp-json/wp/v2/posts/`. Note: at the moment we access the API only with `index.php` prefix like `/index.php/wp-json/wp/v2/posts/`. It will be resolved on later updates