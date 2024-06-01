FROM node:22.2.0-bullseye

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install dependencies
RUN mkdir /opt/home-app
WORKDIR /opt/home-app
ENV PATH /opt/home-app/.bin:$PATH
RUN yarn add jest && yarn add jest-expo
COPY ./package.json ./
RUN npm install

# copy source
COPY ./app ./app
COPY ./assets ./assets
COPY ./components ./components
COPY ./constants ./constants
COPY ./hooks ./hooks
COPY ./scripts ./scripts
COPY ./app.json ./
COPY ./babel.config.js ./
COPY ./tsconfig.json ./

CMD ["npm", "run", "web"]