const handler = async (req, res) => {
  if (req.method === "PUT") {
    const data = JSON.parse(req.body);
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${data.id}/prefs.json`,
      {
        method: "PUT",
        body: req.body,
      }
    );
    res.status(200).json({ message: "done" });
    console.log(`${data.id} updated prefs`);
    console.log("changed data", req.body);
  }
};

export default handler;
