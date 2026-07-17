const bcrypt = require("bcryptjs");

const password = "ahiran_xd@2006";
const hash = bcrypt.hashSync(password, 12);

console.log("HASH:", hash);
console.log(
  "MATCH:",
  bcrypt.compareSync(password, hash)
);