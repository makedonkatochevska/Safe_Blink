# SafeWeb - Project2 - FrontEnd Academy

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Project Description <br>
  - 📖  Project Purpose <br>
  - ✨ Features <br>
  - ⚙️  Tech Stack <br>
  - 🎥 Demo <br>
  - 📂 File Structure <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 💻 Development Process <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>

---

## Project Description 📜

This is a fully responsive, custom-coded web application built to educate users on how to have a safe web experience. It's built with HTML, JavaScript, and Sass, and it mirrors the design provided in a Figma prototype (originally built for a 1920px screen, but responsive across all device sizes). The app includes a range of interactive and educational features like filters, discussions, profile settings, and login authentication using a Flask-based REST API.

---

## Project Purpose 📖

This project was created to showcase my skills in building a single-page web application from scratch, applying best practices in responsive design, custom styling with Sass, client-server communication using REST APIs, and managing user sessions with JavaScript. It replicates a real-world educational application both in functionality and UI/UX.

---

## Features ✨

- 🔄 **Single Page Routing** using hash paths with smooth **fading animation transitions** between pages
- ❌ **404 Error Page** with a Lottie animation when the user enters an invalid or unsupported route
- 📱 **Fully responsive design** for all screen sizes, with a mobile-first approach:

  - On mobile, filters are scrollable
  - The lead-ins section is shown as a carousel
  - The header becomes a dropdown hamburger menu, including login/logout options

- 🔐 **Login Functionality**:

  - Built with a Flask REST API running locally
  - Supports three sets of credentials:
    - `User123 / Pass123`
    - `User456 / Pass456`
    - `User789 / Pass789`
  - Login input includes a show/hide password toggle
  - Login button remains disabled unless both fields are filled
  - Validation for incorrect credentials and server errors (shown via alert)
  - After successful login, a “Добредојде!” overlay appears
  - When logged in, a **logout** button is shown in the header (or in the hamburger menu on mobile)

- 📺 **Home Page Video**:

  - Initially shows a high-res image with a hover play icon
  - Later swapped with a working video element using HTML `<video>` tag

- 🎥 **"Информирај се" Page**:

  - Contains 5 working filter buttons (pills)
  - Videos are displayed based on the selected category
  - Filter state is saved to session storage per user and persists across login/logout and page refreshes

- 💬 **"Табла за дискусии" Page**:

  - Displays hardcoded and user-added comments
  - “See more” button expands additional discussions
  - When the input is active, a send button appears
  - If a user isn’t logged in and tries to post, they are redirected to the login page
  - Logged-in users can post, and the discussion appears below with username and timestamp
  - Each user’s posts are stored in session storage and persist after refresh

- 👤 **"Профил" Page**:

  - Users can change their email and birth year
  - Data is stored in session based on the logged-in user
  - Changes are persistent even after logout/login

- 🎨 **Styling and UX**:

  - Everything is styled with **custom Sass**
  - Fixed header with scroll-based styling
  - Hover effects, animations, and transitions for interactive elements
  - Icons are pulled from Figma’s design system section

- 🌐 **Routing Behavior**:
  - Hash-based SPA navigation using `onhashchange`
  - Only one page is visible at a time, no full reload
  - Unknown routes display a fully styled 404 page

---

## Tech Stack ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![Flask](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=flask&logoColor=white)
- ![Lottie](https://img.shields.io/badge/Lottie-00C1B5?style=flat-square&logo=lottiefiles&logoColor=white)
- ![Session Storage](https://img.shields.io/badge/Session--Storage-3F3F3F?style=flat-square&logo=googlechrome&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## Demo 🎥

Check out the pictures below for a quick preview of the core features:

<a href="https://i.imghippo.com/files/fpdE7623i.png" target="_blank">Home Page</a>
<br>
<a href="https://i.imghippo.com/files/msJy6489tSo.png" target="_blank">Profile Page</a>
<br>
<a href="https://i.imghippo.com/files/Gx8412pjs.png" target="_blank">Contact Page</a>
<br>
<a href="https://i.imghippo.com/files/kLG8772lsM.png" target="_blank">Discussion Page</a>
<br>
<a href="https://i.imghippo.com/files/STMB1613nY.png" target="_blank">Info Page</a>
<br>
<a href="https://i.imghippo.com/files/CPbi6365Nw.png" target="_blank">Log In Page</a>
<br>
<a href="https://i.imghippo.com/files/GJur6211lls.png" target="_blank">Info Page PopUp</a>
<br>
<a href="https://i.imghippo.com/files/OaP5205mac.png" target="_blank">404 Page</a>

OR check out the live demo:

## <a href="https://safe-blink-makedonkatochevska.netlify.app/" target="_blank">LIVE DEMO</a>

## File Structure 📂

- **assets/**: Contains all images and icons used in the application.
- **css/**: Contains the SCSS stylesheet, including styles for the entire application.
- **js/**: Holds JavaScript files for core functionality, including routing and page transitions.
- **REST API/**: The backend folder with the Flask API for authentication.
- **index.html**: The main HTML file for the app.

---

## Installation 🔨

The REST API is already included in the repository under the `/REST API` folder. To run it locally, follow these steps:

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/makedonkatochevska/Safe_Blink.git .
   ```
2. Set up the Flask REST API:
   Make sure you have **Python 3.12.3** or later installed on your system. You can download it from the official [Python website](https://www.python.org/downloads/).
   Then, Open your terminal or command prompt, navigate to the `REST API` folder inside the project directory:
   ```bash
   cd "REST API"
   ```
3. Install the required Python packages:
   ```bash
   pip install flask
   pip install  flask_cors
   ```
4. Run the API:
   ```bash
   python '.\REST API\authenticator.py'
   ```
5. If everything works correctly, you should see a message in the terminal indicating that the Flask server is running on http://127.0.0.1.5500.

---

## Usage 🚀

Once set up, you can access the project through your local browser. You can interact with the page's features, such as:

- Navigate between pages
- Log in using one of the predefined credentials:
  - `User123 / Pass123`
  - `User456 / Pass456`
  - `User789 / Pass789`
- Explore the features:
  - 🧠 Filter educational videos in **"Информирај се"** (filters are saved per user)
  - 💬 Post and view discussions in **"Дискусии"** (available only for logged-in users)
  - 👤 Access the **Profile page** to view or change your email and birth year (data persists per user)
- Enjoy:
  - ✨ Smooth fade animations on page transitions
  - 📱 Fully responsive layout with a carousel for lead-ins and scrollable filters on mobile
  - 🔐 Secure login logic with form validation and REST API integration
  - 🎞️ Interactive videos and playful **Lottie animations**, including a custom 404 page

---

## Development Process 💻

The project was developed with a strong focus on UI/UX, responsiveness, and user interaction. Here's a breakdown of the steps followed during development:

1. **📐 Figma Review & Planning**

   - Studied the full design in Figma for both desktop (1920px) and mobile views.
   - Noted page structure, layout, icons, and interaction behaviors.
   - Identified reusable components, navigation logic, and assets.

2. **🧱 UI Implementation**

   - Fully custom codebase using **HTML5**, **Sass (SCSS)**, and **Vanilla JavaScript**.
   - Header, sections, and components were built to match the exact Figma design.
   - Responsive layout with a mobile-first approach, using media queries and mobile-friendly elements (carousel, scrollable filters).

3. **🔁 Page Routing & State**

   - Implemented single-page routing using `location.hash` and `onhashchange` event.
   - Introduced a fade transition animation when switching routes.
   - If a non-existent hash path is visited, a custom 404 page with a **Lottie animation** is shown.

4. **🔒 Authentication**

   - A simple **Flask REST API** is bundled with the project and used for login validation.
   - Login form includes:
     - Toggle show/hide password
     - Validation to enable the button only when both fields are filled
     - Error handling for invalid credentials or server issues
   - On successful login, a "Добредојде!" overlay is displayed.
   - Login state is stored in **Session Storage**, enabling persistent filters and posts.

5. **🔧 Features Based on Auth State**

   - Only logged-in users can:
     - Post comments in the **"Дискусии"** section.
     - Edit email and birth year in the **Profile page**.
   - New posts appear instantly and persist after refresh using session storage.
   - Filters in **"Информирај се"** are saved per user and persist between sessions.

6. **🧪 Testing & Refinement**
   - Manually tested across devices and screen sizes to ensure responsiveness.
   - Ensured logic for login/logout, route handling, state management, and animations works as intended.

This entire flow supports a fully functional UI prototype simulating a real-world secure browsing awareness platform.

---

## Credits 📝

- **Design**: The design for this project was provided by **Brainster**.
- **Icons**: Icons used throughout the application are from the **Figma Design System** and **Font Awesome**.
- **Animations**: Lottie animations were used to enhance user experience, including the 404 page animation.
- **Flask REST API**: The backend authentication API was built using **Flask**.
- **Mentors & Resources**: Special thanks to the instructors at **Brainster Academy** for their guidance and knowledge.
- **Third-Party Libraries**:
  - **Sass** for efficient styling.
  - **JavaScript** for frontend logic.
  - **Flask** for authentication.
  - **Lottie** for interactive animations.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com)
or
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/makedonka-tochevska)
[![Static Badge](https://img.shields.io/badge/GitHub-white?style=flat&logo=github&logoColor=black&logoSize=auto&labelColor=white&color=white&cacheSeconds=3600&link=https%3A%2F%2Fgithub.com%2Fmakedonkatochevska)](https://github.com/makedonkatochevska)
