import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators}from'@angular/forms'
import { User } from './User';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ans: boolean = false;
  user: User = { nameFirst: "", family: "", city: "" };
  form:FormGroup=new FormGroup({
    nameFirst: new FormControl("פלוני", Validators.required),
    family: new FormControl("family", Validators.required),
    city: new FormControl("city", Validators.required)
  });
  constructor(private userService:UserService){}
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  save() {
  //if i had a server than here i would subscribe the func and print the result message
      let ans = this.userService.saveDetail(this.user);
      if(!ans)
      alert("not save user");
      else
      alert(" save user");

     }
}


