FROM arm64v8/node:16.14
WORKDIR /app
COPY . .
RUN npm install -g serve
RUN npm install --production
RUN npm run build
EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]