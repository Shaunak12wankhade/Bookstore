import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject([{}]);  // this is used for any to any or unrelated data sharing
  receivedData = this.messageSource.asObservable();

  constructor() { }

  sendData(message: any) {
    this.messageSource.next(message)
  }
}
