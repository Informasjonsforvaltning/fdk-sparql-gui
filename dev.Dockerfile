FROM node:16.7-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm set progress=false && \
  npm config set depth 0 && \
  npm ci
RUN npm audit --production --audit-level=moderate
COPY babel.config.js tsconfig.json tsconfig.test.json tsconfig.webpack.json jest.config.js .eslintignore .eslintrc.json ./
COPY webpack ./webpack
COPY test ./test
COPY src ./src
RUN npm test
RUN npm run build:dev
