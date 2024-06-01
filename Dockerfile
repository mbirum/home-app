FROM node:22.2.0-bullseye

RUN echo start

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install dependencies
RUN mkdir /opt/home-app
WORKDIR /opt/home-app
ENV PATH /opt/home-app/.bin:$PATH
#RUN yarn add jest && yarn add jest-expo
COPY ./package.json ./
RUN npm install

# copy source
COPY . .

# export
RUN npx expo export --platform web

CMD ["npx", "serve", "dist"]