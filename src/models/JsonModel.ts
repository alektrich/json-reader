import { makeAutoObservable } from 'mobx';

export type Json = {
  [key: string]: string | number;
};

export default class JsonModel {
  json: Json

  constructor(json: Json) {
    this.json = json;
    makeAutoObservable(this);
  }

  getData(): Json {
    return this.json;
  }

  updateProp(name: string, value: string | number): void {
    if (name === 'id' || !this.json) {
      return;
    }
    this.json[name] = value;
  }
}
