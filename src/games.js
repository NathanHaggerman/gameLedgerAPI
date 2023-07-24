const db = require("./db");

// Function to retrieve all games based on UserID from UsersGame table
function getGamesByUserID(userID) {
  const query = `
    SELECT *
    FROM UsersGame
    WHERE UserID = ?
  `;
  const params = [userID];

  return db.executeQuery(query, params);
}

module.exports = {
  getGamesByUserID,
};
