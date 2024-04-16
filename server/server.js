import express from "express";
import cors from "cors";
import listings from "./routes/listings.js";
import users from "./routes/users.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/portfolio', listings);
app.use('/users', users)


app.listen(PORT, () => {
    console.log(`✅ Server listening on port ${PORT}`);
});