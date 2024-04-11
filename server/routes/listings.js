import express from "express";
import db from "../db/connection.js";

import { ObjectId } from 'mongodb'

const router = express.Router();

// Get all listings as array
router.get("/", async (req, res) => {
    let collection = await db.collection("listings");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// Get single listing by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("listings");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200)
})

// Add new listing
router.post("/", async (req, res) => {
    try {
        let newListing = {
            title: req.body.title,
            price: req.body.price,
            credits: req.body.credits

        }
        let collection = await db.collection("listings")
        let result = await collection.insertOne(newListing)
        res.send(result).status(204);
    } catch (err) {
        console.error(err)
        res.status(500).send("Error adding listing")
    }
})

// Update listing by id
router.patch("/:id", async (req, res) => {
    try{
        const query = {_id: new ObjectId(req.params.id)}
        const updates = {
            $set: {
                title: req.body.title,
                price: req.body.price,
                credits: req.body.credits
            }
        }

        let collection = await db.collection("listings")
        let result = await collection.updateOne(query, updates)
        res.send(result).status(200)
    } catch(err){
        res.status(500).send("Error updating listing")
    }
})

// Delete listing by id
router.delete("/:id", async (req, res) => {
    try{
        const query = {_id: new ObjectId(req.params.id)}
        const collection = db.collection("listings")
        let result = await collection.deleteOne(query)
        res.send(result).status(200)
    } catch (err){
        console.error(err)
        res.status(500).send("Error deleting listing")
    }
})

export default router;