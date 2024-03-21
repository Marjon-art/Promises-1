import json from "./user.js";
import read from "./user.js";

export default class GameSavingLoader {
     load() {
      const data = read(); 
      const value = json(data); 
      return value;
    }
  }
  