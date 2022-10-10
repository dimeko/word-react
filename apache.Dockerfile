FROM php:7.4-apache

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

RUN mkdir /var/www/html/webapp
RUN mkdir /var/www/html/wordpress

COPY ./webapp/ /var/www/html/webapp/
COPY ./wordpress/ /var/www/html/wordpress/

RUN chown -R 33:33 /var/www/html/wordpress

COPY ./sites/ /etc/apache2/sites-enabled/
COPY ./php.ini-development /usr/local/etc/php/
COPY ./php.ini-production /usr/local/etc/php/

EXPOSE 8080