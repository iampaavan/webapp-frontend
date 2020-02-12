FROM node:12.14.1


WORKDIR /app
COPY ./recipes/package.json /app/
COPY ./recipes/package-lock.json /app/
RUN whoami
RUN npm install
RUN npm install -g @angular/cli
COPY ./recipes /app

# RUN npm run build -- --output-path=./dist/out

#stage 2
# FROM nginx:1.17
# COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
# COPY ./recipes/nginx-custom.conf /etc/nginx/conf.d/default.conf
