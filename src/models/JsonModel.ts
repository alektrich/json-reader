import { makeAutoObservable } from 'mobx';

export type Json = {
  [key: string]: string | number;
};

export default class JsonModel {
  json: Json|Json[]

  constructor(json: Json|Json[]) {
    this.json = Array.isArray(json) ? json : [json];
    makeAutoObservable(this);
  }

  getData(): Json[] {
    return this.json as Json[];
  }

  updateProp(name: string, value: string | number, index?: number): void {
    if (name === 'id' || !this.json) {
      return;
    }
    if (typeof index === 'number') {
      (this.json as Json[])[index][name] = value;
    } else {
      (this.json as Json[])[0][name] = value;
    }
  }
}
