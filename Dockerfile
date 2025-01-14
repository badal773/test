FROM nginx:stable-alpine-slim
COPY index.html /usr/share/nginx/html/
COPY img /usr/share/nginx/html/img/



