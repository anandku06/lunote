# Lunote 📝

Lunote is a feature-rich note-taking app built using the MERN stack. It serves as a practice project to enhance backend development skills while integrating modern web technologies.

## Features 🚀

- **Create, Read, Update, Delete Notes**: Manage your notes effortlessly.
- **Rate Limiting**: Implemented using Redis with Upstash for secure and efficient API usage.
- **Routing**: Seamless navigation with React Router.
- **Frontend**: Built with Vite + React for fast and optimized performance.
- **Backend**: Powered by Node.js and Express for robust server-side functionality.
- **Database**: MongoDB for scalable and flexible data storage.

## Tech Stack 🛠️

- **Frontend**: React, Vite, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Rate Limiting**: Redis with Upstash

## Installation 🔧

1. Clone the repository:

   ```bash
   git clone https://github.com/anandku06/lunote.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lunote
   ```

3. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

4. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

5. Create a `.env` file in the `backend` directory and add the following variables:
   ```properties
   MONGO_URI=<your_mongo_connection_string>
   PORT=5001
   UPSTASH_REDIS_REST_URL=<your_upstash_redis_url>
   UPSTASH_REDIS_REST_TOKEN=<your_upstash_redis_token>
   ```

## Usage ▶️

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Future Improvements 🌟

- Add user authentication for secure note management.
- Implement rich text editing for notes.
- Enhance UI/UX for better user experience.

## License 📄

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
