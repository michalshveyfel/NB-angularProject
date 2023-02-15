import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  result: boolean = false;
  constructor() { }
  saveDetail(user: User) {
    //here we need to send the user to the server by http request
    if (user.nameFirst == "huj")
      this.result = true;
    return this.result
  }
}
