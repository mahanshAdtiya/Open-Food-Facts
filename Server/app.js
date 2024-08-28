import dotenv from "dotenv";

dotenv.config();

import { app } from "./index.js";

const PORT = process.env.PORT || 8080;

app.get('/', (rew,res) =>{
    res.send("Open Food Facts Server Running")
})

app.listen(PORT, (req, res) => {
    console.log(`Server Started at: http://localhost:${PORT}`);
  });
