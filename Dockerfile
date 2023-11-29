FROM node:20
COPY . .
WORKDIR /
EXPOSE 3001
# simple docker file for now
run npm ci
run npm run build
ENV HOST=127.0.0.1
CMD ["node","build/index.js"]
