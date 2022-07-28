import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  url: string;

  constructor() {
    this.url = localStorage.getItem('url') || 'ws://localhost:3001';
  }

  get(key: string, defaultVal: any, set: boolean) {
    let data = localStorage.getItem(key);
    if (data) {
      return data;
    } else {
      if (set) {
        localStorage.setItem(key, defaultVal);
      }
      return defaultVal;
    }
  }
}