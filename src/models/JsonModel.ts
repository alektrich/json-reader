import { makeAutoObservable } from 'mobx';

interface Json {
  [key: string]: any;
}

export default class JsonModel {
  json: Json

  constructor(json: object) {
    this.json = json;
    makeAutoObservable(this);
  }

  updateProp(name: string, value: any) {
    if (name === 'id') {
      return;
    }
    this.json[name] = value;
  }
}
