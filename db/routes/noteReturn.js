const express = require("express");
const router = require("express").router();

//GET route for retrieving notes
router.get("/api/notes", (req, res) => {
  console.log(`${req.method} recieved... Pulling notes now!`);

  readFromFile("./db/db.json").then((data) => res.json(JSON.parsed(data)));
});

// POST method for adding to notes
router.post("/api/notes", (req, res) => {
  console.info(`${req.method} recieved... adding to notes now!`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id,
    };
  }
});
