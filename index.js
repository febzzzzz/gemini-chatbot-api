import express from "express";
import cors from "cors";
import gemini from "./GemiBot.js";
import { getCompanyList, getNumberOfModels } from "./data.js "

const app = express();

app.use(cors());

app.post("/gemini", async (req, res) => {
  const { prompt } = req.query;
  //console.log(prompt)
  return res.json({
    text: await gemini(prompt),
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
