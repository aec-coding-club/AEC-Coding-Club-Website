# AEC Coding Club Website

Welcome to the code for AECCC's website.

### General Instructions

1. _Keep the code clean_ : AECCC members will have to read your code long after you've graduated. Don't hurt their eyes.
2. _Comments are the best_ : Make it clear what hacks you've used to keep this website afloat.
3. _Keep the Contributors section up-to-date_ : Just so everyone knows whos fault it is if things screw up.

### Contributors

- Pranay Gupta
- Abir Pal
- Saikat Mukherjee
- Souvik Mandal
- Soumya Banerjee
- Soumali Gorai
- Debdeep Banerjee

### Setup Instructions

1. Clone the repo
2. Serve

### Repository Structure

```
│   .gitignore
│   README.md
│
├───Backend
│   │   .gitignore
│   │   app.js
│   │   index.js
│   │   package-lock.json
│   │   package.json
│   │   README.md
│   │
│   ├───config
│   │       database.js
│   │
│   ├───controllers
│   │       auth.js
│   │       events.js
│   │       mailsender.js
│   │       user.js
│   │
│   ├───middlewares
│   │       istoken.js
│   │       verify.js
│   │
│   ├───models
│   │       Counter.js
│   │       Event.js
│   │       User.js
│   │
│   └───routes
│           auth.js
│           events.js
│
├───Frontend
│   │   .env
│   │   package-lock.json
│   │   package.json
│   │
│   ├───public
│   │   │   index.html
│   │   │   manifest.json
│   │   │   robots.txt
│   │   │
│   │   ├───Assets
│   │   │   │   logo.svg
│   │   │   │   navbarsvg.svg
│   │   │   │
│   │   │   ├───events
│   │   │   │       event-card-1.jpg
│   │   │   │       events-header.jpg
│   │   │   │
│   │   │   └───members
│   │   │           member.png
│   │   │
│   │   └───favicon
│   │           android-chrome-192x192.png
│   │           android-chrome-512x512.png
│   │           apple-touch-icon.png
│   │           favicon-16x16.png
│   │           favicon-32x32.png
│   │           favicon.ico
│   │           site.webmanifest
│   │
│   └───src
│       │   App.css
│       │   App.jsx
│       │   backend.js
│       │   index.css
│       │   index.js
│       │
│       ├───Assets
│       │   │   404-error.png
│       │   │   login.png
│       │   │   logo.svg
│       │   │   otp.png
│       │   │   sign-up.png
│       │   │
│       │   ├───events
│       │   │       event-card-1.jpeg
│       │   │       events-header.jpg
│       │   │
│       │   └───members
│       │           member.png
│       │
│       ├───Components
│       │   │   EventCard.jsx
│       │   │   EventModal.jsx
│       │   │   EventsContainer.jsx
│       │   │   Footer.jsx
│       │   │   MemberCard.jsx
│       │   │   MemberFilter.jsx
│       │   │   MembersContainer.jsx
│       │   │   Navbar.jsx
│       │   │   SideBar.jsx
│       │   │
│       │   └───styles
│       │           Event-Modal.css
│       │           EventCard.css
│       │           EventsContainer.css
│       │           MemberCard.css
│       │           MemberFilter.css
│       │           MembersContainer.css
│       │           Navbar.css
│       │           SideBar.css
│       │
│       ├───data
│       │       eventData.json
│       │       members.json
│       │
│       └───Pages
│           │   Dashboard-Secure.jsx
│           │   Errorpage.jsx
│           │   EventRegister.jsx
│           │   Events.jsx
│           │   Home.jsx
│           │   Members.jsx
│           │   OTP.jsx
│           │   Signin.jsx
│           │   Signup.jsx
│           │
│           ├───Components
│           │   │   Otpforum.jsx
│           │   │   Siginform.jsx
│           │   │   Signupform.jsx
│           │   │
│           │   └───User-Secure-Route
│           │           Dashboad.jsx
│           │
│           ├───Context
│           │       LoggedUserContext.js
│           │
│           └───styles
│                   Error.css
│                   Events.css
│                   Home.css
│                   Members.css
│                   SigninSignup.css
│
└───testfrontend
    │   .env
    │   .gitignore
    │   package-lock.json
    │   package.json
    │   README.md
    │
    ├───public
    │       favicon.ico
    │       index.html
    │       logo192.png
    │       logo512.png
    │       manifest.json
    │       robots.txt
    │
    └───src
        │   App.js
        │   backend.js
        │   index.js
        │
        ├───Components
        │       DummyComponent.js
        │       Navbar.js
        │       OTPform.js
        │       Signin.js
        │       Signup.js
        │
        ├───Context
        │       authContext.js
        │
        ├───Pages
        │       Dashboard.js
        │       ErrorPage.js
        │       Events.js
        │       Home.js
        │       login.js
        │       Members.js
        │       OTPVerify.js
        │       Register.js
        │
        └───style
                home.css
                login.css
```

Copyleft AECCC 2022
