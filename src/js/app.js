import  GameSavingLoader  from "./user.js";

GameSavingLoader.load().then((saving) => {
  }, (error) => {
    return error;
  });