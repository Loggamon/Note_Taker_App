# Note Taker App

![A visual of the Note-taking application; saved notes are on the left side, while a blank memo promt is on the right.](/Assets/Note_Taker_screenshot.png)

## Description

Why did you decide to build this project?

```
This app is the first step to learning front-end and back-end coding, and the language used to connect the two; express.js!
In this project I will be exercising the process of transferring data back and forth, from the client-side to the server-side and then back again.
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

How to install:

```
If you would like to install this project, feel free to clone this repo to your local machine!

Simply click the green button in the top-right corner of the repo to copy the SSH link, and then "git clone" the link to the desired location in your terminal.
```

## Usage

How does your project work?

```
This project is a paradigm of the transferral of information between the front-end and back-end code, in the form of a note-taking app.

In this program, the user is able to create a series of notes that are saved to the website. This way, the user can leave the page, turn off the machine, then return later to interact with those same notes. Although this could be done with local storage,
this method offers a more persistent method of storage; through its use of databases!
```

## Contributing

How can you contribute to this project?

```
If you would like to contribute to this project, feel free to leave a comment or critique for the project, or email me at my email listed below!
```

## Tests

To run this program:

```
This is the function that is being used  to delete specific notes in the database!

To break it down:
- It reads the db file and parses it for use
- It then filters through the items in the array, getting rid of any that had the id that matches the request parameter
- It then re-writes the file with the new array of objects, and saves it!


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

```

## Questions

If you have any questions, you can contact me through:

- [Github](https://github.com/Loggamon)
- Email: scarletfedora@gmail.com

# Dev Log

![A visual of some of the code utilized in the program.](/Assets/Note_Taker_Code_%20Screenshot.png)

## Day One

- Set up assets for public use, as well as downloaded dependencies needed to run program; express.js, and short-unique-id.js (both npm packages!)
- Started laying out server.js page.

## Day Two

- Started creating my route for my note-GET and note-Post functions, and linked them to server.js file.
- Set up HTML routes for traversing website through query parameters.

## Day Three

- Fine-tuned note-GET and note-POST functions as they weren't updating on the page.
- Skimmed unnecessary/ bloated code for easier consumption.

## Day Four

- Typed out this README file!
- Got a DELETE method set up! (Now we have all three; GET, POST, and DELETE!)
- Ran some rough tests with requests!

## Day Five

- Uploaded to Heroku [here](https://memo-taker.herokuapp.com)!

---
