import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { from } from 'rxjs';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email:string;
  public password:string;
  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMensaje:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      this.flashMensaje.show('Inicio de sesión exitoso. ',
      {cssClass:'alert-success', timeout:4000});

      this.router.navigate(['/privado']);

    })
    .catch((err) => {
      this.flashMensaje.show(err.message,
      {cssClass:'alert-danger', timeout:4000});
      console.log(err);
      this.router.navigate(['/login']);

    });

  }
}
