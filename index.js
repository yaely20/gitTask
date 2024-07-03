import express from 'express' 
import bodyParser from "body-parser";

console.log("hii")
const app = express()
const port = 3000
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
