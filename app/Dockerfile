# Create the container from the alpine linux image
FROM alpine:3.7

# Add nginx
RUN apk add --update nginx

# Create the directories workflow
RUN mkdir -p /tmp/frontend
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copy the nginx configuration files
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

# Already inside of AWS EC2
#COPY nginx_config/server.crt /etc/nginx/ssl/server.crt
#COPY nginx_config/server.key /etc/nginx/ssl/server.key

WORKDIR /tmp/frontend

# Copy our source code into the container
COPY www ./www

# copy the built app to our served directory
RUN cp -r www/* /var/www/html && rm -rf ./* 

# make all files belongs to the nginx user
RUN chown nginx:nginx /var/www/html

# start nginx
CMD ["nginx", "-g", "daemon off;"]