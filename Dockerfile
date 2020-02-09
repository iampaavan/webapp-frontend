FROM node:12.14.1
WORKDIR /app
COPY ./recipes/package.json /app/package.json
COPY ./recipes/package-lock.json /app/package-lock.json
RUN npm install
RUN npm install -g @angular/cli
COPY ./recipes /app

#EXPOSE 4200
#CMD ng serve --host 0.0.0.0