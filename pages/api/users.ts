const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body

    const response = await fetch(
      "https://next-notes-9eabe-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    );
    const result = await response.json();
    const allUsers = result.map((el) => {
      return {
        id: el.id,
        login: el.login,
        password: el.password,
      };
    });
    
    const foundUser = allUsers.find(el => {
      if (el.login === data.login && el.password === data.password) {
        return el;
      } 
    })
    console.log(data, allUsers, foundUser);
    if (foundUser) {
      res.status(201).json(foundUser);
    }
    else {
      res.status(500).json({ message: "notFound" });
    }
  }
};

export default handler;
