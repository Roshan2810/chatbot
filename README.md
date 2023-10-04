# Chatbot
It is a simple chatbot implementation.
We can replace the dummy-response with AI model like ChatGPT.

## Getting Started

* Clone the repo:
```sh
git clone https://github.com/Roshan2810/chatbot.git
``` 
* cd into /chatbot-ui and chatbot-server and execute
```sh 
npm install
```
* Enter your ORIGIN in ./chatbot-server/.env
```js
ORIGIN = <YOUR_UI_HOST>
```
* Enter your PORT in ./chatbot-server/.env
```js
PORT = <YOUR_PORT>
```
* cd into /chatbot-ui and execute 
```sh
npm start
```
* cd into /chatbot-server and execute 
```sh
npm run start:local
```

## Acknowledgments

1. [Socket.io](https://socket.io/)
2. [Material-ui](https://mui.com/material-ui/)
