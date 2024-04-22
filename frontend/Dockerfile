FROM node:21-alpine3.18

EXPOSE 3000

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY src src
COPY .eslintrc.json .
COPY index.html .
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

ENTRYPOINT ["npm"]

CMD ["start"]
