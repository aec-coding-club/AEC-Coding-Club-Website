# Backend

api URL routes (/routes/auth.js) ->

- ### /api/v1/register (post)

  - **body:**  
    {  
    "firstName": {string},  
    "lastName": {string},  
    "email": {string},  
    "contact_no": {string},  
    "branch" : {string},  
    "batch": {number},  
    "password": {string},  
    "confirmPassword": {string}  
    }

- ### /api/v1/login (post)

  - **body:**  
    {  
     "uid": {string},  
     "password": {string}  
     }

- ### /api/v1/verify/{string} (get)
- ### /api/v1/dummy (get)
- ### /api/v1/whoami (get)
- ### /api/v1/dashboard (get)

---

<br>
<br>

## first time?

**add .env file and write:**

PORT = 4000
MONGODB_URL = mongodb://localhost:27017/AECCC <br>
SECRET = Hello@Welcome to AECCC./, <br>
MAIL_HOST = 'smtp.gmail.com' <br>
MAIL_USER = < create yourself or ask souvik > <br>
MAIL_PASS = < create yourself or ask souvik > <br>
