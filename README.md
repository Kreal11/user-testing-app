## Website Description

This website is built using Vue.js and Node.js technologies. It serves as a platform for user authentication and provides access to personalized tests. Each user can log in with their account credentials and access a list of tests assigned specifically to them. Once a test is completed, it becomes unavailable, and the results are displayed on its card.

The backend is hosted at `https://user-testing-app.onrender.com` and locally at `localhost:3000`, while the live website is deployed on Vercel.

### Here are the credentials to log in to the application and view the tests assigned to each user:

1) First user:
- Email: "kreal10@gmail.com"
- Password: "23dadaw97da"

2) Second user:
- Email: "olena11@gmail.com"
- Password: "dhjf787fasf"

#### Routes:

- **Home Page**: http://localhost:3000/
  The landing page of the website.

- **User-Specific Test List**: http://localhost:3000/api/auth/user/tests/
  Displays a list of tests assigned to the logged-in user after registration.

- **Specific Test Details**: http://localhost:3000/api/auth/user/test/:id
  Provides details of a specific test, including questions and answer choices.

**Note:** Replace `:id` with the actual ID of the test to view its details.
