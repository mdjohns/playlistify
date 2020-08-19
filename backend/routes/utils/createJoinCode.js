import { create } from "../../models/host";

const createJoinCode = (length = 4) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  return result.join("").toUpperCase();
};

export default createJoinCode;
