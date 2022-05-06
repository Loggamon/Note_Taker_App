const express = require("express");
const { default: ShortUniqueId } = require("short-unique-id");
const noteReturn = require("express").Router();
const fs = require("fs");
const util = require("util");

const noteJSON = require("../db/db.json");
const { request } = require("http");

//GET route for retrieving notes
noteReturn.get("/notes", (req, res) => {
  const readFilePromise = util.promisify(fs.readFile);

  readFilePromise("./db/db.json").then((data) => res.json(JSON.parse(data)));
  console.info(`${req.method} recieved... Pulling notes now!`);

  //res.status(200).json(noteJSON);
});

// POST method for adding to notes
noteReturn.post("/notes", (req, res) => {
  const uid = new ShortUniqueId({ length: 5 });

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      id: uid(),
    };

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedNotes = JSON.parse(data);

        parsedNotes.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(parsedNotes), (err) =>
          err ? console.error(err) : console.info("Added!")
        );
        res.status(201).json(noteJSON);
      }
    });
  } else {
    res.status(500).json("Error in saving note!");
  }
});

// DELETE method for deleting notes
noteReturn.delete("/notes/:id", (req, res) => {
  const requestedNote = req.params.id;

  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedNotes = JSON.parse(data);
      const remNotes = parsedNotes.filter(checkId);

      function checkId(notes) {
        return notes.id != requestedNote;
      }

      fs.writeFile("./db/db.json", JSON.stringify(remNotes), (err) =>
        err ? console.error(err) : console.info("Removed!")
      );
      res.status(201).json(noteJSON);
    }
  });
});

module.exports = noteReturn;
