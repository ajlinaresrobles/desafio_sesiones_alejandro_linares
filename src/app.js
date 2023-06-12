import express from "express";
import { engine } from "express-handlebars";
import session from "express-session";
import MongoStore from "connect-mongo";
import { connectDB } from "./views/config/dbConnection.js";
import { __dirname } from "./utils.js";
import path from "path";
import { viewsRouter } from "./routes/views.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import passport from "passport";
import { initializePassport } from "./views/config/passport.config.js";


const port = 8080;
const app = express();

app.listen(port, ()=>console.log(`server listening on port ${port} `));


app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "/views"));


connectDB();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://ajlinaresrobles:Ale120384.@cluster0.wqwvedx.mongodb.net/desafioSesionesDB?retryWrites=true&w=majority"
    }),
    secret: "claveSecreta",
    resave: true,
    saveUninitialized: true
}));


initializePassport();
app.use(passport.initialize());
app.use(passport.session());


app.use(viewsRouter);
app.use("/api/sessions", authRouter);

