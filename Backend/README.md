### Express Server API URLs:

<pre>
<a href="./app.js">General:</a>
<b>[GET]</b>
        • /
        • /*

<a href="./routes/alllogs.js">Logs:</a>
<b>[GET]</b>
        • /api/v1/logger
        • /api/v1/branchdata
        • /api/v1/yeardata
        • /api/v1/alluser
        • /api/v1/eventsdata
<b>[POST]</b>
        • /api/v1/updateuser/:id

<a href="./routes/auth.js">Authentication:</a>
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

<a href="./routes/events.js">Events:</a>
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

## First time?

**Add `.env` file and write:**
<pre>
PORT = 4000
MONGODB_URL = mongodb://localhost:27017/AECCC
SECRET = Hello@Welcome to AECCC./,
MAIL_HOST = 'smtp.gmail.com'
MAIL_USER = &lt;create yourself or ask <a href="https://github.com/8-bit-souvik">Souvik</a>&gt;
MAIL_PASS = &lt;create yourself or ask <a href="https://github.com/8-bit-souvik">Souvik</a>&gt;
</pre>
