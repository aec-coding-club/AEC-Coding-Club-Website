<p>
    <img src="https://img.shields.io/github/issues-raw/aec-coding-club/AEC-Coding-Club-Website">
    <img src="https://img.shields.io/github/contributors/aec-coding-club/AEC-Coding-Club-Website">
    <img src="https://img.shields.io/github/issues-pr/aec-coding-club/AEC-Coding-Club-Website">
    <img src="https://img.shields.io/github/license/aec-coding-club/AEC-Coding-Club-Website">
    <img src="https://img.shields.io/github/last-commit/aec-coding-club/AEC-Coding-Club-Website">
    <img src="https://img.shields.io/badge/react-%5E17.0.2-blue">
</p>

<h6 align="center"><img src="assets/aeccc.png" height="250" /></p></h6>
<h1 align="center"><code>&nbsp;AEC Coding Club Community Website&nbsp;</code></h1>
This is the student-run community site and event management webapp for the Coding Club of Asansol Engineering College using React, Express and MongoDB.

<br>

## 💻 Getting started

The frontend was bootstrapped with Create React App. In the project root directory, run `npm install` to install all project dependencies. Next, run `npm start` to start the developmental server which will trigger open your default browser to `localhost:3000`. Run `npm install` and `npm run dev` in [`Backend`](./Backend) directory to set up the Express server.

### To set up frontend...

**Add `.env` file in root and write:**
<pre>
REACT_APP_SERVER=http://localhost:4000/api/v1/
</pre>

### React app routers:

<pre>
<b>/</b>                         -> <a href="src/Pages/Home.jsx">Pages/Home.jsx</a>
  <b>/events</b>                 -> <a href="src/Pages/Events.jsx">Pages/Events.jsx</a>
  <b>/members</b>                -> <a href="src/Pages/Members.jsx">Pages/Members.jsx</a>
  <b>/signup</b>                 -> <a href="src/Pages/Signup.jsx">Pages/Signup.jsx</a>
  <b>/signin</b>                 -> <a href="src/Pages/Signin.jsx">Pages/Signin.jsx</a>
  <b>/entermail</b>              -> <a href="src/Pages/Enteremail.jsx">Pages/Enteremail.jsx</a>
  <b>/verify</b>                 -> <a href="src/Pages/OTP.jsx">Pages/OTP.jsx</a>
  <b>/setNewPassword/:token</b>  -> <a href="src/Pages/Setpassword.jsx">Pages/Setpassword.jsx</a>
  <b>/dashboard</b>              -> <a href="src/Pages/Dashboard-Secure.jsx">Pages/Dashboard-Secure.jsx</a>
  <b>/admin</b>                  -> <a href="src/Pages/Components/User-Secure-Route/Admin Panel/Admin.jsx">Pages/Components/User-Secure-Route/Admin Panel/Admin.jsx</a>
    <b>/admin/overview</b>       -> <a href="src/Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminOverview.jsx">Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminOverview.jsx</a>
    <b>/admin/admin-users</b>    -> <a href="src/Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminUsers.jsx">Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminUsers.jsx</a>
    <b>/admin-events</b>         -> <a href="src/Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminEvents.jsx">Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminEvents.jsx</a>
    <b>/admin-logs</b>           -> <a href="src/Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminLogs.jsx">Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminLogs.jsx</a>
    <b>/admin-stats</b>          -> <a href="src/Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminStats.jsx">Pages/Components/User-Secure-Route/Admin Panel/Pages/AdminStats.jsx</a>
  <b>/*</b>                      -> <a href="src/Pages/Errorpage.jsx">Pages/Errorpage.jsx</a>
</pre>

### Express Server API:

<pre>
<a href="./Backend/app.js">General:</a>
<b>[GET]</b>
        • /
        • /*

<a href="./Backend/routes/alllogs.js">Logs:</a>
<b>[GET]</b>
        • /api/v1/logger
        • /api/v1/branchdata
        • /api/v1/yeardata
        • /api/v1/alluser
        • /api/v1/eventsdata
<b>[POST]</b>
        • /api/v1/updateuser/:id

<a href="./Backend/auth.js">Authentication:</a>
<b>[GET]</b>
        • /api/v1/dummy
        • /api/v1/dashboard
        • /api/v1/dashboardtry
<b>[POST]</b>
        • /api/v1/register
        • /api/v1/login
        • /api/v1/verify
        • /api/v1/dummy
        • /api/v1/tokenforreset
        • /api/v1/setNewPassword/:token

<a href="./Backend/routes/events.js">Events:</a>
<b>[GET]</b>
        • /api/v1/events
        • /api/v1/:id
<b>[POST]</b>
        • /api/v1/add
        • /api/v1/registerevent:id
        • /api/v1/announceall
<b>[PUT]</b>
        • /api/v1/update/:id
<b>[DELETE]</b>
        • /api/v1/delete
</pre>

<br>

## ⚒️ Tools and Frameworks

<h6 align="center"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-CC6699?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> <img src="https://img.shields.io/badge/VSCode-blue?style=for-the-badge&logo=visualstudiocode&logoColor=white"></h6>

<br>

## ✨ Contributing

By contributing to this repository, you adhere to the rules in our [Code of Conduct](./.github/CODE_OF_CONDUCT.md). Here are a few general instructions for people willing to develop onto the codebase.

### • Create issues to discuss your ideas with the maintainers

Creating issues before starting to work on your pull request helps you stay on the right track. Discuss your proposal well with the current maintainers.

### • Keep the code clean

AECCC members will read your code long after you've graduated. Don't hurt their eyes. Follow the code formatting standards of the repository by referring to existing source files.

### • Comments are the best

Make it clear what hacks you've used to keep this website afloat. Your work needs to be understood first, before getting appreciated (or criticised).

### • Keep the Contributors section up-to-date

Just so that everyone knows whose fault it is if things get screwed up.

<br>

## 👨‍💻 Our valuable Contributors

This project is made possible by our valuable contributors .Thanks to all the **People Who Contribute**.

![Contributors](https://contributors-img.web.app/image?repo=aec-coding-club/AEC-Coding-Club-Website)

<br>

## Repository structure

Prettyprinted ASCII project directory tree in [`docs/TREE.md`](./docs/TREE.md)

<br>

## 📜 License

[`MIT License`](./LICENSE) Copyright (c) 2022 AEC Coding Club
