# Inicia o container com uma imagem do linux no AWS
FROM alpine:3.7

# Add nginx
RUN apk add --update nginx

# Criação dos diretórios para workflow
RUN mkdir -p /tmp/roca
RUN mkdir -p /var/log/nginx
RUN mkdir -p /var/www/html

# Copia os arquivos de configuração do nginx
COPY nginx_config/nginx.conf /etc/nginx/nginx.conf
COPY nginx_config/default.conf /etc/nginx/conf.d/default.conf

WORKDIR /tmp/roca

# Copia os arquivos source para dentro do container
COPY www ./www

# Copia os arquivos principais do app para o diretório do servidor
RUN cp -r www/* /var/www/html && rm -rf ./* 

# Autoriza todos os arquivos para pertencer ao usuário nginx
RUN chown nginx:nginx /var/www/html

# Inicia o nginx e mantem o processo execuntando no backgrounding do container
CMD ["nginx", "-g", "daemon off;"]