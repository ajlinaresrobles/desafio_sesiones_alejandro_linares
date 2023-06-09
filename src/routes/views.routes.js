import { Router } from "express";

const router = Router();


router.get("/", (req, res)=>{
    res.render("home");
});

router.get("/login", (req, res)=>{
    res.render("login");
});

router.get("/register", (req, res)=>{
    res.render("register");
});

router.get("/products", (req, res)=>{

    console.log(req.user);
    res.render("products", {email: req.user.email});


});



export { router as viewsRouter};