# Recipes App

## Overview
The Recipes App is a CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and Mongoose. It allows users to manage their recipes by adding, retrieving, updating, and deleting them. The project follows the MVC pattern and includes comprehensive API documentation using Postman.

## Features
- Create a new recipe
- Retrieve all recipes
- Retrieve a single recipe by ID
- Update a recipe by ID
- Delete a recipe by ID
- Follows MVC architecture
- Uses MongoDB for database storage
- API documentation in Postman
- Proper error handling and validation

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tools:** Postman (for API testing and documentation)

## Project Structure
```
recipes-app/
│── models/           # Mongoose models
│── controllers/      # Controller logic for routes
│── routes/           # Express routes
│── config/           # Database connection settings
│── middleware/       # Middleware (e.g., error handling, authentication)
│── seed/             # Dummy data insertion script
│── app.js            # Main application entry point
│── package.json      # Project dependencies
│── README.md         # Project documentation
```

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (for testing API endpoints)

### Steps to Run the Project
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/recipes-app.git
   cd recipes-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=3000
     ```

4. **Start the server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

5. **Run the seed script (optional, to add dummy data)**
   ```bash
   node seed/seed.js
   ```

## API Endpoints
| Method | Endpoint              | Description                 |
|--------|-----------------------|-----------------------------|
| POST   | /api/recipes          | Create a new recipe        |
| GET    | /api/recipes          | Get all recipes            |
| GET    | /api/recipes/:id      | Get a recipe by ID         |
| PUT    | /api/recipes/:id      | Update a recipe by ID      |
| DELETE | /api/recipes/:id      | Delete a recipe by ID      |

### Example API Request (Using Postman)
#### Create a Recipe (POST `/api/recipes`)
```json
{
  "title": "Spaghetti Carbonara",
  "ingredients": ["spaghetti", "eggs", "cheese", "bacon"],
  "instructions": "Boil pasta. Cook bacon. Mix all ingredients.",
  "prepTime": 20,
  "servings": 2
}
```

## Deployment
### Deploy on Render
1. **Create a new Render service**
   - Go to [Render](https://render.com/)
   - Create a new Web Service
   - Connect your GitHub repository
   - Set the `MONGO_URI` environment variable
   - Deploy the service

2. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Submit your URLs**
   - Submit the Render deployment URL and GitHub repository link in the portal.

## License
This project is licensed under the MIT License.

## Contact
For any questions or suggestions, feel free to reach out!

#   r e c i p e s - a p i - a p p - p o s t m a n - c r u d  
 #   r e c i p e s - a p i - a p p - p o s t m a n - c r u d  
 