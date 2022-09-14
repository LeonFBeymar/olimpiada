const express = require('express');
const router = express.Router();
import exposicion from "../models/exposicion";

router.get("/exposicion", (req, res) => {
    res.send(exposicion)
})

router.post("/exposicion", (req, res) => {
    let exposicionNueva = req.body
    exposicion.
})

router.put("/exposicion", (req, res) => {

    
})

router.delete("/exposicion", (req, res) => {

    
})