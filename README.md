## User assessment application

Technologies:

![Vite](https://img.shields.io/badge/Vite%20-%20%23000000?style=for-the-badge&logo=Vite%20&logoColor=violett&color=violet)
![Vue.js](https://img.shields.io/badge/Vue.js%20-%20%2300000?style=for-the-badge&logo=vue.js&logoColor=toxicgreen&color=black)
![Vue Router](https://img.shields.io/badge/Vue%20Router%20-%20%2300000?style=for-the-badge&logo=vue.js&logoColor=toxicgreen&color=black)
![Pinia](https://img.shields.io/badge/pinia%20-%20yellow?style=for-the-badge&logo=Pinia%20vue.js&logoColor=toxicgreen&color=yellow)
![Node.js](https://img.shields.io/badge/Node.js%20-%20%23000000?style=for-the-badge&logo=Node.js&logoColor=white&color=darkgreen)
![Express](https://img.shields.io/badge/Express%20-%20%23000000?style=for-the-badge&logo=Express&logoColor=white&color=grey)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)


This website serves as a platform for user authentication and provides access to personalized tests. Users can log in with their account credentials and access a list of tests assigned to them. Once a test is completed, it becomes unavailable, and the results are displayed on its card.

The backend is hosted at `https://user-testing-app.onrender.com` and may be hosted locally at `localhost:3000`, while the live website is deployed on Vercel.

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
