# GPT Login System Instructions

To run the login system:
1. Ensure MongoDB is running locally on port `27017`.
2. Run the server using: `node gpt/index.js`

### Routes:
- `POST /register`: Accepts `{ "username": "...", "password": "..." }`
- `POST /login`: Authenticates user and sets session cookie.
- `GET /dashboard`: Authenticated users can view their status.
- `GET /logout`: Ends user session.
