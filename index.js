import express from "express" 

const PORT = 3000

const app = express()

// list of allowed requests:
app.get("/hello", (req, res) => {
    res.send("HelloThere!")
})

app.get("/test", (req,res) => {
    res.send( "It's working! 😀")
})


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}...`)
    //same as:
    //console.log("Listening on http://localhost:" + PORT + "...")
})
