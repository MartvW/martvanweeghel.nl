FROM arm64v8/node:16.14
WORKDIR /app
COPY ./build ./build
RUN npm install -g serve
EXPOSE 443
CMD ["serve", "-s", "build", "-l", "443"]