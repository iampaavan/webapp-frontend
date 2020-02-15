FROM node:12.14.1 as build-stage
WORKDIR /app
ENV API_URL=a12e42b65d33f4f64a087a5b927f459b-1417043443.us-east-1.elb.amazonaws.com
COPY ./recipes/package.json /app/
COPY ./recipes/package-lock.json /app/
RUN npm install
RUN npm install -g @angular/cli
COPY ./recipes /app

#EXPOSE 4200
#CMD ng serve --host 0.0.0.0
RUN npm run build -- --output-path=./dist/out

#stage 2
FROM nginx:1.15
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY ./recipes/nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*
EXPOSE 2000
CMD ["nginx", "-g", "daemon off;"]
