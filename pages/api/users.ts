const handler = async (req, res) => {
  const data = req.query;
  const response = await fetch(
    "https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  );
  const result = await response.json();
  const allUsers = result.map((el) => {
    return {
      id: el.id,
      login: el.login,
      password: el.password,
      prefs: el.prefs,
    };
  });

  if (req.method === "GET") {
    const foundUser = allUsers.find((el) => {
      if (el.login === data.login) {
        return el;
      }
    });
    if (foundUser) {
      if (foundUser.password === data.password) {
        res.status(200).json(foundUser);
      } else {
        res.status(500).json({ message: "Incorrect password" });
      }
    } else {
      res.status(500).json({ message: "Account not found" });
    }
  }
  if (req.method === "POST") {
    const isTaken = allUsers.find((el) => {
      if (el.login === data.login) {
        return el;
      }
    });

    console.log("Sign in result", isTaken);

    if (!isTaken) {
      result.push({
        id: NaN,
        login: data.login,
        password: data.password,
        prefs: {
          title: "Note title",
          backColor: "#aaaaaa",
          foreColor: "#111111",
          text: "Write here!",
          sound: 1,
        },
        notes: [],
      });

      await fetch(
        `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            result.map((el, id) => {
              if (el) el.id = id;
              return el;
            })
          ),
        }
      );
      await res.status(201).json(result[result.length - 1]);
    } else {
      res.status(500).json({ message: "This login is already taken" });
    }
  }
};

export default handler;
