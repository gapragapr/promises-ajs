import json from './parser';
import read from './render';
import GameSaving from './gameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
        .then((data) => json(data))
        .then((data) => new GameSaving(JSON.parse(data)))
  }
}
