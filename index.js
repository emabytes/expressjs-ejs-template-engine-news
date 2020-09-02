const express = require("express")
const app = express()
const data = require("./data.json")

app.set("view engine", "ejs")

app.listen(5005, () => {
    console.log("server at http://localhost:5005")
})

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index", { data: data })
})

app.use((req, res) => {
    res.render('404', { title: 'Not found' })
})