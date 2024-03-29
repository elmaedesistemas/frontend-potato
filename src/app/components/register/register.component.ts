import { Component, OnInit } from '@angular/core';
import { UserServiceProvider } from '../../services/user.service'
import { User } from '../../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserServiceProvider]
})
export class RegisterComponent implements OnInit {
    public page_title: string
    public user: User
    public status: string
  constructor(
      private _userService: UserServiceProvider
  ) {
      this.page_title = 'Register'
      this.user = new User( 1, '', '', 'ROLE_USER', '', '', '', '')
   }

  ngOnInit() {
    console.log('Inital component initialized')
    console.log(this._userService.test())
  }

  onSubmit(form){
    console.log(this.user)
    
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = response.status
          //console.log(response)
          form.reset()
        }else {
          this.status = 'error'
        }
      },
      error => {
        this.status = 'error'
        console.log(<any>error);
        
      }
    )
    
  }
}
