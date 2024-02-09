const express = require("express");
const router = express.Router();
const Entry = require("../models/Entry.model");

router.post("/entry", (req, res, next) => {
    const {
        entryOwner,
        entryClient,
        entryQuantity,
        entryDate,
    } = req.body;
    Entry.create({
        entryOwner,
        entryClient,
        entryQuantity,
        entryDate,
    })
        .then((newEntry) => {
            res.json(newEntry);
        })
        .catch((error) => {
            console.error(error);
        });
});
