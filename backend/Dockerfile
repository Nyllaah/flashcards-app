FROM node:21-alpine3.18

EXPOSE 3000

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY src src
COPY .eslintignore .
COPY .eslintrc.json .
# COPY .sequelizerc .
# COPY tsconfig.json .

ENTRYPOINT ["npm"]

CMD ["start"]