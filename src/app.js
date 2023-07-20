const express = require("express");
const bodyParser = require("body-parser");
const users = require("./users");
const cors = require("cors");

const app = express();

app.use(cors());

// Middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to retrieve users
app.get("/users", async (req, res) => {
  try {
    const userList = await users.getUsers();
    res.json(userList);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// Route to create a new user
app.post("/users", async (req, res) => {
  try {
    const newUser = req.body;
    console.log("newUser", newUser);
    await users.createUser(newUser);
    res.sendStatus(201);
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// DELETE route for deleting a user
app.delete("/users/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    await users.deleteUser(userID);
    res.sendStatus(204);
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// PUT route for updating a user
app.put("/users/:id", async (req, res) => {
  try {
    const userID = req.params.id;
    const updatedUser = req.body;
    await users.updateUser(userID, updatedUser);
    res.sendStatus(204);
  } catch (error) {
    console.error("Failed to update user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
