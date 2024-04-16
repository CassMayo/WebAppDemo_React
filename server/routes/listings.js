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


// get all listings that have given owner_id
router.get("/filter/:ownerId", async (req, res) => {
    try {
        let collection = await db.collection("listings")
        let query = { ownerId: req.params.ownerId };
        let results = await collection.find(query).toArray();

        if (!results) { res.status(404).send("Listings not found for owner id: ", req.params.ownerId) }
        else { res.status(200).json(results) }
    }
    catch (err) {
        console.error(err)
        res.status(500).send("Error retrieving listings by owner id")
    }
}
)


// Add new listing
router.post("/", async (req, res) => {
    try {
        let newListing = {
            title: req.body.title,
            price: req.body.price,
            credits: req.body.credits,
            type: req.body.type,
            imageUrl: req.body.imageUrl,
            imageAlt: req.body.imageAlt,
            location: req.body.location,
            description: req.body.description,

            ownerId: req.body.ownerId, // same id as logged in user so we can link up who owns what..
            ownerName: req.body.ownerName
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
    try {
        const query = { _id: new ObjectId(req.params.id) }
        const updates = {
            $set: {
                title: req.body.title,
                price: req.body.price,
                credits: req.body.credits,
                type: req.body.type,
                imageUrl: req.body.imageUrl,
                imageAlt: req.body.imageAlt,
                location: req.body.location,
                description: req.body.description,
            }
        }

        let collection = await db.collection("listings")
        let result = await collection.updateOne(query, updates)
        res.send(result).status(200)
    } catch (err) {
        res.status(500).send("Error updating listing")
    }
})


// Delete listing by id
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }
        const collection = db.collection("listings")
        let result = await collection.deleteOne(query)
        res.send(result).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send("Error deleting listing")
    }
})

export default router;