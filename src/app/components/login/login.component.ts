import { Component, OnInit } from '@angular/core'
import { UserServiceProvider } from '../../services/user.service'
import { User } from '../../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserServiceProvider]
})
export class LoginComponent implements OnInit {
    public page_title: string;
    public user: User
    public status: string
    public token
    public identity

  constructor(
      private _userService: UserServiceProvider
  ) { 
    this.page_title = 'Login'
    this.user = new User( 1, '', '', 'ROLE_USER', '', '', '', '')
  }

  ngOnInit() {}

    onSubmit(form){
      console.log(this.user)

      this._userService.login(this.user).subscribe(
        response => {
          console.log(response)

          //TOKEN
          if(response.status != 'error'){
            this.status = 'success'
            this.token = response

            //object user identified
            this._userService.login(this.user, true).subscribe(
              response => {
                
                   this.identity = response

                   console.log(this.token)
                   console.log(this.identity)
                  },
                  error => {
                    this.status = 'error'
                    console.log(<any>error)
                  }
                ) // END OF SECOND CALLED

          }else {
            this.status = 'error'
          }
        },
        error => {
          this.status = 'error'
          console.log(<any>error)
        }
      )
  }

}
