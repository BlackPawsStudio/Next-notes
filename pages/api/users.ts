const handler = async (req, res) => {
  const data = req.query;
  const response = await fetch(
    "https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  );
  const result = await response.json();

  const allUsers = result
    ? (
        Object.values(result) as [
          {
            id: number;
            login: string;
            password: string;
            prefs: {
              title: string;
              backColor: string;
              foreColor: string;
              text: string;
              sound: number;
            };
          }
        ]
      ).map((el) => {
        return {
          id: el.id,
          login: el.login,
          password: el.password,
          prefs: el.prefs,
        };
      })
    : [];

  if (req.method === "GET") {
    const foundUser = allUsers.find((el) => {
      if (el.login === data.login) {
        return el;
      }
    });
    if (foundUser) {
      if (foundUser.password === data.password) {
        res.status(200).json(foundUser);
        console.log(`${foundUser.login} entered account`);
      } else {
        res.status(500).json({ message: "Incorrect password" });
        console.log(`${foundUser.login} failed password check`);
      }
    } else {
      res.status(500).json({ message: "Account not found" });
      console.log(`failed login attempt`);
    }
  }

  if (req.method === "POST") {
    const isTaken = allUsers.find((el) => {
      if (el.login === data.login) {
        return el;
      }
    });

    console.log("Sign in result", isTaken ? "account taken" : "Not found");

    if (!isTaken) {
      if (allUsers) {
        allUsers.push({
          id: 0,
          login: data.login,
          password: data.password,
          prefs: {
            title: "Note title",
            backColor: "#aaaaaa",
            foreColor: "#111111",
            text: "Write here!",
            sound: 1,
          },
        });

        await fetch(
          `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              allUsers.map((el, id) => {
                if (el) el.id = id;
                return el;
              })
            ),
          }
        );
        res.status(201).json(allUsers[allUsers.length - 1]);
        console.log(`${allUsers[allUsers.length - 1].login} created account`);
      } else {
        await fetch(
          `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              0: {
                id: 0,
                login: data.login,
                password: data.password,
                prefs: {
                  title: "Note title",
                  backColor: "#aaaaaa",
                  foreColor: "#111111",
                  text: "Write here!",
                  sound: 1,
                },
              },
            }),
          }
        );
        res.status(201).json();
      }
    } else {
      res.status(500).json({ message: "This login is already taken" });
      console.log("Tried to enter taken account");
    }
  }

  if (req.method === "DELETE") {
    const userId = data.id;
    await fetch(
      `https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}.json`,
      {
        method: "DELETE",
      }
    );
    res.status(200).json({ message: "success" });
    console.log(`${userId} deleted account`);
  }
};

export default handler;
