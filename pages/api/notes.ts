const handler = async (req, res) => {
  const data = req.query;

  if (req.method === "GET") {
    if (data.note) {
      const response = await fetch(
        `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.user}/notes/${data.note}.json`
      );
      const note = await response.json();
      res.status(200).json(note);
      console.log(`${data.user} requested ${data.note} note`);
    } else {
      const response = await fetch(
        `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.user}/notes.json`
      );
      const notes = await response.json();
      res.status(200).json(notes ? notes : []);
      console.log(`${data.user} requested all notes`);
    }
  }

  if (req.method === "DELETE") {
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.user}/notes/${data.note}.json`,
      {
        method: "DELETE",
      }
    );
    res.status(200).json({ message: "done" });
    console.log(`${data.user} deleted ${data.note} note`);
  }

  if (req.method === "PUT") {
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.user}/notes/${data.note}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );
    res.status(200).json({ message: "done" });
    console.log(`${data.user} updated ${data.note} note`);
    console.log("changed data", JSON.stringify(req.body));
  }

  if (req.method === "POST") {
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.user}/notes.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );
    res.status(201).json({ message: "done" });
    console.log(`${data.user} created new note`);
  }
};

export default handler;
