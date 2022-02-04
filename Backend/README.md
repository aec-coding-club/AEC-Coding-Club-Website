# Backend


api URL routes (/routes/auth.js) ->

 - ### /api/v1/register     (post)
   - **body:**   
    {  
    "firstName":"qwerty",   
    "lastName":"dorvok",  
    "email":"souvikmandal210@gmail.com",  
    "contact_no": 1224458890,  
    "branch" : "IT",  
    "batch":2025,  
    "password":"abcd123",  
    "confirmPassword":"abcd123"   
    }  

 - ### /api/v1/login        (post)
   - **body:**   
     {   
      "uid":"\<user id>",	  
      "password": "\<password>"  
       }

 - ### /api/v1/active-account       (post)
   - **body:**  
    {   
     "otp":"\<otp>"   
     }

 - ### /api/v1/dummy        (get)
 - ### /api/v1/whoami       (get)
 - ### /api/v1/dashboard    (get)


------------------------------

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