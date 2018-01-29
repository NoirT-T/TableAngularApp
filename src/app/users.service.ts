import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class UsersService {
  constructor(private http: Http) {
  }
  size:number = 16;


  setSize(size){
    this.size = size;
  }


   getUsers() {
    return this.http.get('http://www.filltext.com/?rows='+this.size+'&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .map(response => response.json())
      .map(users => {
          return users.map(user => {
            return (user)
          })
        }
      )
  }
}
