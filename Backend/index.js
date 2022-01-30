const express = require("express")

const app = express()
const PORT = 4000


app.get("/", (req, res) => {
    return res.json({ "Message": "Hello" })
})

app.listen(PORT, () => {
    console.log("Server is Up and Running");
})