import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World 123")
})

app.post("/", (req, res) => {
  res.send("App POST")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})