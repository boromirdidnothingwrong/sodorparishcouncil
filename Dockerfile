FROM node:20
COPY . .
WORKDIR /
EXPOSE 3001
# simple docker file for now
run npm ci
run npm run build --prod
run node -r dotenv/config build
CMD ["node"]
