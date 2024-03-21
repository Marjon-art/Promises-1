import json from "./reader.js";
import read from "./parser.js";

export default class GameSavingLoader {
     load() {
       return read().then(data => json(data),
        )
     }
  }
