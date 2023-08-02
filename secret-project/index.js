import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var isAuthorized = false;

app.use(bodyParser.urlencoded({extended: true}));

function checkPassword(req, res, next){
    const password = req.body.password;
    if(password === "ILoveProgramming"){
        isAuthorized=true;
    }
    console.log(isAuthorized);
    next();
}
app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
app.post("/check", (req, res) => {
    if(isAuthorized){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
    isAuthorized = false;
});










app.listen(port,() => {
    console.log("Server started successfully");
})