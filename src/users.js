const db = require("./db");

// Function to retrieve users
function getUsers() {
  const query = "SELECT * FROM Users";

  return db.executeQuery(query);
}

// Function to create a new user
function createUser(user) {
  const query =
    "INSERT INTO Users (UserID, Name, Email, Password) VALUES (?, ?, ?, ?)";
  const params = [user.UserID, user.Name, user.Email, user.Password];

  return db.executeQuery(query, params);
}

// Function to delete a user
async function deleteUser(userID) {
  const query = "DELETE FROM Users WHERE UserID = ?";
  const params = [userID];

  try {
    await db.executeQuery(query, params);
  } catch (error) {
    throw new Error("Failed to delete user");
  }
}

// Function to update a user
async function updateUser(userID, updatedUser) {
  const query =
    "UPDATE Users SET Name = ?, Email = ?, Password = ? WHERE UserID = ?";
  const params = [
    updatedUser.Name,
    updatedUser.Email,
    updatedUser.Password,
    userID,
  ];

  try {
    await db.executeQuery(query, params);
  } catch (error) {
    throw new Error("Failed to update user");
  }
}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
