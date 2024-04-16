import express from "express";
import db from "../db/connection.js";

import { ObjectId } from 'mongodb'

const router = express.Router();


// Get all users as array
router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// Get single user by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200)
})

// Get single user by userName
router.get("/getUser/:userName", async (req, res) => {
    let collection = await db.collection("users");
    let query = { userName: req.params.userName };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200)
})



// Add new user if
router.post("/", async (req, res) => {
    try {
        let newUser = {
            userName: req.body.userName,
            isSeller: req.body.isSeller, // Seller OR Buyer
            logo: req.body.logo,
            about: req.body.about,
            location: req.body.location,
            logoUrl: req.body.logoUrl

        }
        let collection = await db.collection("users")
        let result = await collection.insertOne(newUser)
        res.status(201).json({ _id: result.insertedId });
    } catch (err) {
        console.error(err)
        res.status(500).send("Error adding user")
    }
})


// Update user by id
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }
        const updates = {
            $set: {
                userName: req.body.userName,
                isSeller: req.body.isSeller, // Seller OR Buyer
                logo: req.body.logo,
                about: req.body.about,
                location: req.body.location,
                logoUrl: req.body.logoUrl
            }
        }

        let collection = await db.collection("users")
        let result = await collection.updateOne(query, updates)
        res.send(result).status(200)
    } catch (err) {
        res.status(500).send("Error updating user")
    }
})


// Delete user by id
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }
        const collection = db.collection("users")
        let result = await collection.deleteOne(query)
        res.send(result).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("Error deleting users")
    }
})

export default router;