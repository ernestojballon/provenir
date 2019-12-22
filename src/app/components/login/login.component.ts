import { Component, OnInit } from '@angular/core';
import {User, LogUser} from '../../models/User'
import {AuthService} from '../../services/http/auth-service.service'
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User = {
    username : "",
    password : ""
  }
constructor(private toastr: ToastrService,
            private userService:AuthService,
            private router: Router) {
}

ngOnInit() {
}
singIn(e:Event){
  e.preventDefault()
  this.userService.getAll()
                  .subscribe((users:LogUser[])=>{
                      let userNameF:LogUser = users.find((user:LogUser)=>{
                        return this.user.username == user.username 
                      })
                      if(userNameF){
                        if(userNameF.password == this.user.password){
                          this.toastr.success(`Welcome ${userNameF.name}`);
                          this.router.navigate(['listView'])
                        }else{
                          this.toastr.error("Invalid password try again");
                          this.user.password = ""
                        }
                      }else{
                        this.toastr.error("Invalid username or password");
                        this.user.username = ""
                        this.user.password = ""

                      }

                    } 
                    )
                  
}

}
