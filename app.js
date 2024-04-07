const express = require("express")
const path = require("path")

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/home", async (req, res) => {
    const datas = await apiBook()
    res.render("main", { datas })
})

async function apiBook() {
    const url = "https://api-imc.onrender.com/"
    const response = await fetch(url)
    return await response.json()
}

app.listen(8080, () => {
    console.log("server online.")
})
