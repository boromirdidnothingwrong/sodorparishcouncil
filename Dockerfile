FROM node:18-alpine
COPY . .
WORKDIR /
EXPOSE 3001
# simple docker file for now
run npm i
run npm run build
run node -r dotenv/config build
CMD ["node"]
