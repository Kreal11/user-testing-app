## Website Description

This website is built using Vue.js and Node.js technologies. It serves as a platform for user authentication and provides access to personalized tests. Each user can log in with their account credentials and access a list of tests assigned specifically to them. Once a test is completed, it becomes unavailable, and the results are displayed on its card.

The backend is hosted at `https://user-testing-app.onrender.com` and or may be hosted locally at `localhost:3000`, while the live website is deployed on Vercel.

### Here are the credentials to log in to the application and view the tests assigned to each user:

1) First user:
- Email: "kreal10@gmail.com"
- Password: "23dadaw97da"

2) Second user:
- Email: "olena11@gmail.com"
- Password: "dhjf787fasf"

#### Routes:

Public route:

- **Home Page**: https://user-testing-app.vercel.app/
  The landing page of the website.

Private routes:

- **User-Specific Test List**: https://user-testing-app.vercel.app/tests
  Displays a list of tests assigned to the logged-in user after registration.

- **Specific Test Details**: https://user-testing-app.vercel.app/test/:id
  Provides details of a specific test, including questions and answer choices.

**Note:** Replace `:id` with the actual ID of the test to view its details.
