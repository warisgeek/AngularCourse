import { Injectable } from '@angular/core';

@Injectable()
export class DateService {

  constructor() { }
  GetCurrentDate() {
    return new Date();
  }
}
