FROM node:20.10 as builder

# Create app directory
WORKDIR /usr/src/app
COPY .  . 

# Install app dependencies
RUN npm install

# Bundle app source
RUN npm run build

FROM nginx:1.25

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]