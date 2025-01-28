# Chat App Backend

This repository contains the backend code for a real-time chat application. It is built using modern technologies to provide a scalable, secure, and efficient chat system.

## Features

- User authentication and authorization (JWT-based).
- Real-time messaging using WebSockets.
- Scalable database structure for chat history.
- Support for one-to-one and group chats.
- RESTful APIs for user and chat management.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing users, messages, and chats.
- **Socket.IO**: Real-time communication.
- **JWT**: For secure authentication.
- **bcrypt**: Password hashing.

## Installation

Follow these steps to set up the backend locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/iamyoussefezzat/chat-app-back-end.git
   cd chat-app-back-end
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server should now be running at `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.

### Users

- `GET /api/users`: Get a list of all users.
- `GET /api/users/:id`: Get details of a specific user.

### Chats

- `POST /api/chats`: Create a new chat.
- `GET /api/chats`: Get all chats for a user.
- `GET /api/chats/:id`: Get details of a specific chat.

### Messages

- `POST /api/messages`: Send a new message.
- `GET /api/messages/:chatId`: Get messages for a specific chat.

## WebSocket Events

- `connection`: Triggered when a client connects.
- `message`: Used to send and receive real-time messages.
- `disconnect`: Triggered when a client disconnects.

## Folder Structure

```
chat-app-back-end/
├── controllers/      # Handles business logic for routes
├── models/           # Database schemas
├── routes/           # API routes
├── utils/            # Utility functions (e.g., authentication, error handling)
├── .env              # Environment variables
├── server.js         # Entry point of the application
└── README.md         # Documentation
```

## Future Improvements

- Add support for file sharing (images, videos, documents).
- Implement push notifications for new messages.
- Enhance security with rate-limiting and input validation.
- Add typing indicators and read receipts.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add a new feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature-name
   ```

5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or suggestions!
