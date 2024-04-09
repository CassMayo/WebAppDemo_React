import express from "express";
import cors from "cors";
import listings from "./routes/listings.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/listings', listings);


app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
});