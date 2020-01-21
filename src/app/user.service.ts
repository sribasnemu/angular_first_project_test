import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor() { }
  login(data){
    if(data.email == "yash@gmail.com" && data.pswd == 12345){
      console.log("LOGIN SUCCESSFUL");
      
    }else{
       console.log("INVALID CREDENTIALS");
       
    }
  }
}
