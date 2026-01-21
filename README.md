# 🎸 Guitar Academy

Educative web plataform for guitarist all over the world. Selling guitar courses from beginner to advanced levels. Improve your skills as a guitarist buying courses of some of the best master guitarists teachers from all over the world. A page were you can dominate and learn all techniques in the guitar, learning about music, scales, chords and harmony, all in one, but of course.. music theory principally dedicated to the guitar instrument.

---

## 🚀 Technologies
- Vue.js
- Node.js
- Express
- PostgreSQL
- REST API
- Git & GitHub

---

# 🚀 Main functionalities of the project
This project is a full-stack educational platform developed with Vue on the frontend, Node.js + Express on the backend, and PostgreSQL as the database. The main functionalities are detailed below.

🔹 Professor visualization and management

🔹 Public professor view
All users, whether logged in or not, can access the Professors section.

All registered professors are displayed with their:

- Name
- Email
- Profile image
  
The information is obtained through backend requests and is dynamically rendered in cards.

🔹 Administrator-only functionalities

When the user has the Administrator role, the system automatically recognizes it and additional buttons are enabled in the professors view:

- Insert professor (in development)
- Erase professor (in development)
  
These buttons are only shown if the user is an administrator.

Although these actions are still under development, the conditional rendering by role works correctly and demonstrates the system’s authorization logic.

🔹 Profile image system (uploads)
The project implements a clear and scalable logic to handle profile images:

- There is an /uploads folder on the backend.
- Images are physically stored in that folder.
- Only the image path is stored in the database, not the file itself.
- The backend exposes the /uploads folder as static content, allowing images to be accessed via a stable URL.
- The frontend receives the image path from the backend and dynamically renders it on each card.
- Currently:
Images have been manually added to the uploads folder.
The logic is prepared so that in the future users can upload their image via an Upload button.

🔹 User profile (in development)
The Profile view is being developed and is accessible to:

1- Professors

2- Administrator

3- Students

In this view, the user’s information will be displayed according to their role.

The main goal of this section is to allow:

- Uploading or changing the profile photo
- Managing personal information
The Upload button has already been conceptually designed and will be responsible for sending the image to the backend and storing it in /uploads.

🔹 Course management

🔹 Course visualization!

Courses are displayed in dynamic cards.
Each course includes:

- Course information
- Difficulty
- Modality
- Price
- Associated professor (name and image)
- There is a filtering navbar that allows viewing courses by difficulty: beginner, intermediate and advanced

🔹 Create Course (professors and administrators)

The Create Course button is shown only to:

1- Professors

2- Administrators

The form includes validations (required) and a professional structure.

📌 If the user is a professor:
The course is automatically created associated with their user.
No need to select a professor.

📌 If the user is an administrator:
A dynamic select of professors is displayed.

The administrator chooses which professor to assign the course to.
The course is correctly linked to that professor.

This logic ensures a clear relationship between courses and professors.

🔹 Authentication, roles, and security
- Complete login system with token.
The token is stored in Local Storage.
- The session remains active and the frontend identifies the user’s role.
- The UI dynamically adapts based on permissions.
  
🔹 Backend architecture and organization
The backend is organized in a clear and scalable way:

1- authorization.js
Contains the authorization logic and role control.

2- queries.js
Centralizes all SQL queries to PostgreSQL.

3- seeds
Scripts to insert initial data (users, professors, etc.).

4- index.js
Server entry point where routes, authorization, and queries are combined.

--

## 📸 Screenshots
![Register](./Screenshots/Register.png)
![HomeContact](./Screenshots/Home_contact.png)
![HomeProfile](./Screenshots/Home_profile.png)
![Courses](./Screenshots/Courses.png)
![ProfessorsPage](./Screenshots/Profesors_page.png)


--

# 🚀 Project status:

All the described functionalities are working correctly, except for those explicitly marked as in development.

---

## 👤 Author
**CharlesPuyalena**  
Informatic engineering student of the Jose Antonio Hechevarría University (CUJAE)... Cuba(3er año) 
Mid-Level Full Stack Web Developer  
GitHub: https://github.com/charl3sprogram
