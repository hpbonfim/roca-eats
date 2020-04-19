#DOCKERFILE PARA TESTES
FROM node:12.16.2

#WORKDIR
WORKDIR /usr/src/app

# INSTALL IONIC AND ANGULAR
RUN npm install -g @angular/cli @ionic/cli

COPY . .

RUN cp tmp/docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]