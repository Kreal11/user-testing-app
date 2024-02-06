### Website Description

This website is built using Vue.js and Node.js technologies. It serves as a platform for user authentication and provides access to personalized tests. Each user can log in with their account credentials and access a list of tests assigned specifically to them. Once a test is completed, it becomes unavailable, and the results are displayed on its card.

The backend is hosted locally at `localhost:3000`, while the live website is deployed on Vercel.

#### Routes:

- **Home Page**: http://localhost:3000/
  The landing page of the website.

- **User-Specific Test List**: http://localhost:3000/api/auth/user/tests/
  Displays a list of tests assigned to the logged-in user after registration.

- **Specific Test Details**: http://localhost:3000/api/auth/user/test/:id
  Provides details of a specific test, including questions and answer choices.

**Note:** Replace `:id` with the actual ID of the test to view its details.
